(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

    // Items Controller
    ItemsController.$inject = ['itemsList']
    function ItemsController(itemsList) {
        var itemsCtrl = this;

        itemsCtrl.itemsList = itemsList.data;
    }
})();
