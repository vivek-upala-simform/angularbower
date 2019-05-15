(function() {
    'use strict';

    angular
        .module('freewire-frontend')
        .run(runBlock);

    runBlock.$inject = ['$log', '$rootScope', '$state', '$cookies', 'rootUrl', 'environment'];

    /** @ngInject */
    function runBlock($log, $rootScope, $state, $cookies, rootUrl, environment) {
        $log.info('Running with environment settings for: {0}', environment);
        $log.info('RootUrl is set to: {0}', rootUrl);

        //Handle login functionality
        /*eslint-disable*/
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            var principal = $cookies.getObject('principal');

            if (principal && isLoggedIn(principal)) {
                $log.info('User has cookie, logging in with it.');
                $rootScope.principal = principal;
                $log.debug('Cookie object: {0}', principal);
                return;
            } else if (toState && toState.name === 'login') {
                $log.debug('Showing login page without redirecting');
                return; //Do not redirect
            } else if (toState && toState.name === 'forgotpassword') {
                $log.debug('Showing forgotpassword page without redirecting');
                return; //Do not redirect
            } else if (toState && toState.name === 'resetpassword') {
                $log.debug('Showing resetpassword page without redirecting');
                return; //Do not redirect
            } else if (!isLoggedIn($rootScope.principal)) {
                $log.debug('Showing login page');
                event.preventDefault();
                $state.go('login');
            }
        });
        /*eslint-enable*/

        function isLoggedIn(principal) {
            if (principal) {
                if (principal.userName && principal.accessToken) {
                    return true;
                }
                return false;
            }
            // else if(!principal){
            //   return false;
            // }
            return false;
        }

        $log.debug('runBlock end');
    }

})();