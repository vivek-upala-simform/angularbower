(function() {
    'use strict';

    angular
        .module('freewire-frontend')
        .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
        .state('default', {
            url: '/',
            templateUrl: 'app/components/home/home.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })
            .state('login', {
                url: '/login',
                templateUrl: 'app/components/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state('forgotpassword', {
                url: '/forgotpassword',
                templateUrl: 'app/components/login/forgotpassword.html',
                controller: 'ForgotPasswordController',
                controllerAs: 'vm'
            })
            .state('resetpassword', {
                url: '/resetpassword',
                templateUrl: 'app/components/login/resetpassword.html',
                controller: 'ForgotPasswordController',
                controllerAs: 'vm'
            })
            .state('chademowelcome', {
                url: '/chademowelcome',
                templateUrl: 'app/components/chademowelcome/chademowelcome.html',
                controller: 'ChademowelcomeController',
                controllerAs: 'vm'
            })
            .state('connectcreditcard', {
                url: '/connectcreditcard',
                templateUrl: 'app/components/creditcard/creditcardconnect.html',
                controller: 'CreditcardController',
                controllerAs: 'vm'
            })
            .state('authenticatecreditcard', {
                url: '/authenticatecreditcard',
                templateUrl: 'app/components/creditcard/authenticatecreditcard.html',
                controller: 'CreditcardController',
                controllerAs: 'vm'
            })
            .state('plugvehicle', {
                url: '/plugvehicle',
                templateUrl: 'app/components/vehicle/plugvehicle.html',
                controller: 'VehicleController',
                controllerAs: 'vm'
            })
            .state('error', {
                url: '/error',
                templateUrl: 'app/components/error/error.html',
                controller: 'ErrorController',
                controllerAs: 'vm'
            });
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/');
    }
})();