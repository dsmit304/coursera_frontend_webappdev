(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['ApiPath', 'user'];
    function MyInfoController(ApiPath, user) {
      var info = this;

      info.basePath = ApiPath;
      info.user = user;
    }
})();
    