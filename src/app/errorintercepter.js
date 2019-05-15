(function() {
    'use strict';

    angular
        .module('freewire-frontend')
        .service('errorInterceptor', errorInterceptor)
        .config(config);

    function config($httpProvider) {
        $httpProvider.interceptors.push('errorInterceptor');
    }

    errorInterceptor.$inject = ['$q', '$rootScope', '$location', '$window'];

    function errorInterceptor($q, $rootScope, $location, $window) {
        return {
            request: function(config) {
                return config || $q.when(config);
            },
            requestError: function(request) {
                return $q.reject(request);
            },
            response: function(response) {
                return response || $q.when(response);
            },
            responseError: function(response) {
                if (response && response.status === 500) {
                    $window.location.href = "#/error";
                }
                return $q.reject(response);
            }
        };
    }

})();