(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['MenuService', 'StoreDataService', 'ApiPath', 'user'];
    function MyInfoController(MenuService, StoreDataService, ApiPath, user) {
      var info = this;

      info.basePath = ApiPath;
      info.user = user;
    }
})();
    