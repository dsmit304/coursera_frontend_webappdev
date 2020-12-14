(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['MenuService', 'StoreDataService'];
    function SignUpController(MenuService, StoreDataService) {
      var sign = this;

      sign.checkFavItem = function() {
        if(sign.user.favItem !== undefined) {
          var promise = MenuService.getMenuShortName(sign.user.favItem);

          promise.then(function (results) {
            if (results.error) {
                sign.favItemNotFound = true;
            } else {
                sign.favItemNotFound = false;
                sign.user.name = results.name;
                sign.user.description = results.description;
            }
          });
        }
      }
  
      sign.submit = function () {
        if (!sign.favItemNotFound) {
            StoreDataService.setUser(sign.user);
            sign.dataSaved = true;
        }
      }
    }
})();
    