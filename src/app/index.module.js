(function() {
    'use strict';

    angular
        .module('freewire-frontend', ['ngCookies', 'ngSanitize', 'ngMessages', 'ui.router', 'app.config', 'angular.filter', 'underscore', 'validation', 'validation.rule', 'ngAnimate', 'mgcrea.ngStrap']);

    angular
        .module('freewire-frontend')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['loginService', '$rootScope','$state'];

    function IndexController(loginService, $rootScope,$state) {
        var vm = this;
        vm.currentUser = '';
        vm.state = true;
        vm.logOut = logOut;
        vm.isLoggedIn = isLoggedIn;
        vm.isAdmin = isAdmin;
        vm.toggleState = toggleState;
       

        function isAdmin() {
            if ($rootScope.principal != null && $rootScope.principal.roleName === 'SuperAdmin') {
                return true;
            }
            return false;
        }

        function logOut() {
            loginService.logOut();
        }

        function isLoggedIn() {
            if ($rootScope.principal && $rootScope.principal.userName) {
                return true;
            }
            return false;
        }

        function toggleState() {
            vm.state = !vm.state;
        }     
    }

    angular
        .module('freewire-frontend')
        .directive('sidebarDirective', function() {
            return {
                link: function(vm, element, attr) {
                    vm.$watch(attr.sidebarDirective, function(newVal) {
                        if (newVal) {
                            element.addClass('toggled');
                            return;
                        }
                        element.removeClass('toggled');
                    });
                }
            };
        });
})();