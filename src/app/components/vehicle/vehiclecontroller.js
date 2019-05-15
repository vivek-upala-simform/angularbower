(function() {
    'use strict';

    angular
    .module('freewire-frontend')
    .controller('VehicleController', VehicleController);
    VehicleController.$inject = ['$log', '$rootScope', '$state', '$cookies'];
    function VehicleController($log, $rootScope, $state, $cookies) {
        var vm = this;       
        
        activate();

        function activate() {
            $rootScope.error = null;
            $log.info('Welcome :)');
        }
        
    }
})();