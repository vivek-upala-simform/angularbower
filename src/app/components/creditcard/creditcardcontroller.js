(function() {
    'use strict';

    angular
    .module('freewire-frontend')
    .controller('CreditcardController', CreditcardController);
    CreditcardController.$inject = ['$log', '$rootScope', '$state', '$cookies'];
    function CreditcardController($log, $rootScope, $state, $cookies) {
        var vm = this;       
        activate();
        vm.authenticatecreditcard=authenticatecreditcard;
        vm.plugvehicle = plugvehicle;
        function activate() {
            $rootScope.error = null;
            $log.info('Welcome :)');
        }
        function authenticatecreditcard()
        {
            $state.go('authenticatecreditcard');
        }
        function plugvehicle()
        {
            $state.go('plugvehicle');
        }
    }
})();