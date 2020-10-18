(function () {
    'use strict';
    // AngularJS Setup
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    // To Buy Controller
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;

        buy.items = ShoppingListCheckOffService.getBuyItems();
        buy.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        }
    }
    // Already Bought Controller
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }
    // Shopping List Check Off Service
    function ShoppingListCheckOffService() {
        var service = this;
        var buyItems = [
            {name: "Bread Sticks", quantity: 4, type: "packs", pricePerItem: 1.54},
            {name: "Brownies", quantity: 3, type: "boxes", pricePerItem: 2.85},
            {name: "Butter", quantity: 8, type: "sticks", pricePerItem: .79},
            {name: "Chicken Breast", quantity: 1.5, type: "lbs", pricePerItem: 4.26},
            {name: "Chips", quantity: 1, type: "bag", pricePerItem: 2.50},
            {name: "Coca-Cola", quantity: 6, type: "cans", pricePerItem: .89},
            {name: "Garlic", quantity: 2, type: "cloves", pricePerItem: .50},
            {name: "Marinara Sauce", quantity: 2, type: "jars", pricePerItem: 2.99},
            {name: "Milk", quantity: 1, type: "gallon", pricePerItem: 3.50},
            {name: "Ziti Noodles", quantity: 3, type: "boxes", pricePerItem: .99}
        ];
        var boughtItems = [];

        service.buyItem = function(index) {
            // Add current item to bought list
            console.log(buyItems[index]);
            boughtItems.push(buyItems[index]);

            // Remove current item from buy list
            buyItems.splice(index, 1)
        }

        // Returns Buy Items List
        service.getBuyItems = function() {
            return buyItems;
        }
        // Returns Bought Items List
        service.getBoughtItems = function() {
            return boughtItems;
        }
    }
})();