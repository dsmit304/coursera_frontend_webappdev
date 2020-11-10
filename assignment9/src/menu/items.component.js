(function () {
    'use strict';

    angular.module('data')
    .component('items', {
        templateUrl: 'src/menu/templates/items.html',
        bindings: {
            itemsList: '<'
        }
    });
})();
    