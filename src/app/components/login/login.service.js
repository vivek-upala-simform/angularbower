(function() {
    'use strict';

    angular
        .module('freewire-frontend')
        .factory('loginService', LoginService);

    LoginService.$inject = ['$log', '$http', 'rootUrl', '$state', '$rootScope', '$cookies', '$q'];

    function LoginService($log, $http, rootUrl, $state, $rootScope, $cookies, $q) {
        var service = {
            login: login,
            logOut: logOut,
            getLoginUser: getLoginUser,
            forgotPassword: forgotPassword,
            resetPassword: resetPassword
        };
        return service;

        function login(username, password) {
            $log.debug('RootUrl: {0}', rootUrl);
            //This has to be structured like this to allow x-www-form-urlencoded which is the default for getting the access token

            return $http({
                method: 'POST',
                url: rootUrl + '/Token',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: "grant_type=password&username=" + username + "&password=" + password
            });
        }

        function logOut() {
            $log.info('Logging the user out');
            $rootScope.principal = null;
            $cookies.remove('principal');
            $state.go('login');
        }

        function getLoginUser() {
            $log.info('Getting user data for user');
            return $http.get(rootUrl + '/api/Account/MyDetails');
        }

        function forgotPassword(email) {
            $log.info('Forgot password');

            return $http.post(rootUrl + '/api/Account/ForgotPassword/', email).then(function(data) {
                    $log.info('Success: {0}', data);
                    return data;
                })
                .catch(function(error) {
                    $log.error(error);
                    return $q.reject(error);
                });
        }

        function resetPassword(resetPassModel) {
            $log.info('Forgot password');

            return $http.post(rootUrl + '/api/Account/ResetPassword/', resetPassModel).then(function(data) {

                    $log.info('Success: {0}', data);
                    return data;
                })
                .catch(function(error) {
                    $log.error(error);
                    return $q.reject(error);
                });
        }
    }
})();