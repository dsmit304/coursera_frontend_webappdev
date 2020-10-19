(function () {
    'use strict';
    // AngularJS Setup
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .filter('price', PriceFilter)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    // To Buy Controller
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;
        // Exposes buy items array
        buy.items = ShoppingListCheckOffService.getBuyItems();
        // Exposes buy item function in service
        buy.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        }
    }
    // Already Bought Controller
    AlreadyBoughtController.$inject = ['priceFilter', 'ShoppingListCheckOffService'];
    function AlreadyBoughtController(priceFilter, ShoppingListCheckOffService) {
        var bought = this;
        // Exposes bought items array
        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }
    // Custom Filter to display item total price
    function PriceFilter() {
        return function (input) {
            input = input || "";
            return "$$$" + input;
        }
    }
    // Shopping List Check Off Service
    function ShoppingListCheckOffService() {
        var service = this;
        // Default buy and bought object arrays
        var buyItems = [
            {name: "Bread Sticks", quantity: 4, type: "pack", pricePerItem: 1.54},
            {name: "Brownies", quantity: 3, type: "carton", pricePerItem: 2.85},
            {name: "Butter", quantity: 8, type: "stick", pricePerItem: .79},
            {name: "Chicken Breast", quantity: 1.5, type: "lb", pricePerItem: 4.26},
            {name: "Chips", quantity: 1, type: "bag", pricePerItem: 2.50},
            {name: "Coca-Cola", quantity: 6, type: "can", pricePerItem: .89},
            {name: "Garlic", quantity: 2, type: "clove", pricePerItem: .50},
            {name: "Marinara Sauce", quantity: 2, type: "jar", pricePerItem: 2.99},
            {name: "Milk", quantity: 1, type: "gallon", pricePerItem: 3.50},
            {name: "Ziti Noodles", quantity: 3, type: "carton", pricePerItem: .99}
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