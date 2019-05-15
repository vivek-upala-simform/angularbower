(function() {
    'use strict';

    angular
        .module('freewire-frontend')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$log', '$rootScope', '$state', '$cookies', 'loginService'];

    function LoginController($log, $rootScope, $state, $cookies, loginService) {
        var vm = this;
        vm.principal = null;
        vm.userName = '';
        vm.password = '';
        vm.login = login;
        vm.logOut = logOut;
        vm.isLoggedIn = isLoggedIn;
        var cookieName = 'principal';

        activate();

        function activate() {
            $rootScope.error = null;
            $log.info('Welcome :)');
        }

        function login() {
            $log.info('Trying to login');
            $rootScope.principal = {};

            loginService.login(vm.userName, vm.password).then(function(response) {
                $log.info('Success {0}', response);

                $rootScope.principal.userName = response.data['userName'];
                $rootScope.principal.accessToken = response.data['access_token'];
                $rootScope.principal.expiresIn = response.data['expires_in'];
                $rootScope.principal.tokenType = response.data['token_type'];
                $rootScope.principal.expires = response.data['.expires'];
                $rootScope.principal.issued = response.data['.issued'];


                $log.info('Trying to locate the current users roles');
                loginService.getLoginUser().then(function(userDetailResponse) {

                    $log.info('Found roles for the current user: {0}', userDetailResponse);
                    $rootScope.principal.Id = userDetailResponse.data['Id'];
                    $rootScope.principal.name = userDetailResponse.data['Name'];
                    $rootScope.principal.roleName = userDetailResponse.data['RoleName'];

                    $cookies.putObject(cookieName, $rootScope.principal);
                    //alert($cookies.getObject(cookieName).userName);

                    if ($rootScope.principal.roleName === 'SuperAdmin')
                        $state.go('adminHome');
                    else
                        $state.go('userHome');
                }, function(error) {
                    $log.error('Failed to get the roles for the current user: {0}', error);
                });

                //Store the information in a cookie
                $cookies.putObject(cookieName, $rootScope.principal);

                $log.info('Principal set on $rootScope: {0}', $rootScope.principal);
            }, function(error) {
                $log.error('Failed: {0}', error);
                if (error.data && error.data.error) {
                    //show error
                }
            });
        }

        function isLoggedIn() {
            if ($rootScope.principal && $rootScope.principal.userName) {
                return true;
            }
            return false;
        }

        function logOut() {
            loginService.logOut();
        }
    }
})();