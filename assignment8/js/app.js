(function () {
    'use strict';
    // AngularJS Setup
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");
    // Found Items Directive
    function FoundItemsDirective() {
        var ddo = {
          templateUrl: 'foundItems.html',
          scope: {
            found: '<',
            onRemove: '&'
          },
          controller: NarrowItDownController,
          controllerAs: 'menu',
          bindToController: true
        };

        return ddo;
      }
    // Narrow It Down Controller
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        // Runs service once button is clicked
        menu.getMatchedMenuItems = function (searchTerm) {
            menu.message = "";
            menu.found = "";
            var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

            promise.then(function (results) {
                if (results === undefined || results.length == 0) {
                    menu.message = "Nothing found";
                } else {
                    menu.found = results;
                }
            });
        };
        // Removes clicked item
        menu.removeItem = function (index) {
            MenuSearchService.removeItem(index);
            // Check if all items have been removed
            if(menu.found.length == 0) {
                menu.message = "No more items to remove";
                menu.found = "";
            }
        };
    }
    // Menu Search Service
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        var foundItems = [];
        // Gets data from API
        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (results) {
                foundItems = [];
                // Loops through entire menu
                for (var item of results.data.menu_items) {
                    // Puts matched results in found items array
                    if (searchTerm !== "" && item.description.includes(searchTerm)) {
                        foundItems.push(item);
                    }
                }

                return foundItems;
            });
        };
        // Remove current item from found items list
        service.removeItem = function(index) {
            foundItems.splice(index, 1)
        }
    }
})();