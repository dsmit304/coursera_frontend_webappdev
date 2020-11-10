(function () {
  'use strict';
  
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");
  
    // Menu Search Service
  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
      var service = this;

      // Gets all categories from API
      service.getAllCategories = function() {
          return $http({
              method: "GET",
              url: (ApiBasePath + "/categories.json")
          }).then(function (results) {
              return results;
          });
      };

      // Gets all items in a specific category from API
      service.getItemsForCategory = function(categoryShortName) {
        return $http({
          method: "GET",
          url: (ApiBasePath + "menu_items.json?category="),
          params: {category: categoryShortName}
        }).then(function (results) {
            return results;
        });
      };
  }
})();
    