(function() {
    'use strict';

    angular
    .module('freewire-frontend')
    .controller('HomeController', HomeController);
    HomeController.$inject = ['$log', '$rootScope', '$state', '$cookies'];
    function HomeController($log, $rootScope, $state, $cookies) {
        var vm = this;       
        vm.chademowelcome = chademowelcome;
        activate();

        function activate() {
            $rootScope.error = null;
            $log.info('Welcome :)');
        }
        function chademowelcome()
        {
            $state.go('chademowelcome');
        }
    }
})();