(function() {
    'use strict';

    angular
        .module('freewire-frontend')
        .controller('ErrorController', ErrorController);

    ErrorController.$inject = ['$document', '$log', '$rootScope'];

    function ErrorController($document, $log, $rootScope) {
        activate();

        function activate() {
            $rootScope.error = null;
            var modalBack = angular.element($document[0].querySelector('.modal-backdrop'));
            if (modalBack !== null)
                modalBack.remove();
        }
    }

})();