(function() {
    'use strict';

    angular
        .module('freewire-frontend')
        .config(config)
        .factory('tokenRequestInterceptor', tokenRequestInterceptor);

    config.$inject = ['$logProvider', '$httpProvider', '$validationProvider', '$qProvider'];
    tokenRequestInterceptor.$inject = ['$rootScope', '$q', '$injector'];

    /** @ngInject */
    function config($logProvider, $httpProvider, $validationProvider, $qProvider) {
        //============= Validation Config ===============
        $validationProvider.addMsgElement = function(element) {
            //$(element).parent().append('<span class="validation"></span>');
            angular.element(element).parent().append('<span class="validation"></span>');
        };

        $validationProvider.getMsgElement = function(element) {
            // return $(element).parent().children().last();
            var eleList = angular.element(element).parent().children();
            return angular.element(eleList[eleList.length - 1]);
        };
        $validationProvider.showSuccessMessage = false;
        /*eslint-enable*/
        // Enable log
        $logProvider.debugEnabled(true);
        //to resolve this error -- Possibly unhandled rejection: error
        $qProvider.errorOnUnhandledRejections(false);
        //Setup authentiocationHeader interceptor
        $httpProvider.interceptors.push('tokenRequestInterceptor');
    }

    function tokenRequestInterceptor($rootScope, $q, $injector) {
        return {
            request: function(config) {

                if ($rootScope.principal) {
                    config.headers['Authorization'] = 'Bearer ' + $rootScope.principal.accessToken;
                }
                return config;
            },

            responseError: function(rejection) {
                if (rejection.status === 401) {
                    $rootScope.principal = null;
                    var $state = $injector.get('$state');
                    $state.go('login');
                }
                return $q.reject(rejection);
            }
        };
    }
})();