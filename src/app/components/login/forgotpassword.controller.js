(function() {
    'use strict';

    angular
        .module('freewire-frontend')
        .controller('ForgotPasswordController', ForgotPasswordController);

    ForgotPasswordController.$inject = ['$window', '$location', '$log', 'loginService'];

    function ForgotPasswordController($window, $location, $log, loginService) {
        var vm = this;
        vm.email = '';
        vm.password = '';
        vm.confirmPassword = '';
        vm.forgotPass = forgotPass;
        vm.resetPassword = resetPassword;

        function forgotPass() {
            var model = { Email: vm.email };
            loginService.forgotPassword(model).then(function(response) {
                    $log.debug('Found user! {0}', response);
                    //show message
                    $window.location.href = "#/login";
                })
                .catch(function(error) {
                    $log.error('Failed to retrieve data: {0}', error);
                    //show message
                });
        }

        function resetPassword() {
            var searchObject = $location.search();
            var resetPassModel = { UserId: searchObject.userId, Code: searchObject.code, NewPassword: vm.password, ConfirmPassword: vm.confirmPassword };
            loginService.resetPassword(resetPassModel).then(function(response) {
                    $log.debug('Password Reset: {0}', response);
                    //show message
                    $window.location.href = "#/login";
                })
                .catch(function(error) {
                    $log.error('Failed to reset password: {0}', error);
                    //show message
                });
        }
    }
})();