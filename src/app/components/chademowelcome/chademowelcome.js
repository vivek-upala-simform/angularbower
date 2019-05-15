(function() {
    'use strict';

    angular
    .module('freewire-frontend')
    .controller('ChademowelcomeController', ChademowelcomeController);
    ChademowelcomeController.$inject = ['$log', '$rootScope', '$state', '$cookies'];
    function ChademowelcomeController($log, $rootScope, $state, $cookies) {
        var vm = this;       
        vm.connectcreditcard = connectcreditcard;
        activate();

        function activate() {
            $rootScope.error = null;
            $log.info('Welcome :)');
        }
        function connectcreditcard()
        {
            $state.go('connectcreditcard');
        }
    }
})();