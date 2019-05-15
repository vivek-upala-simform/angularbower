/* global moment:false */
(function() {
    'use strict';

    angular
        .module('freewire-frontend')
        .constant('moment', moment)
        .constant('dateFormat', 'MM.DD.YYYY HH:mm');
})();