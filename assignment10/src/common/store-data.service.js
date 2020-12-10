(function () {
    "use strict";
  
    angular.module('common')
    .service('StoreDataService', StoreDataService);
  
  
    StoreDataService.$inject = ['$http', 'ApiPath'];
    function StoreDataService($http, ApiPath) {
        var service = this;
        var user;
    
        service.setUser = function(userData) {
            user = userData;
        };

        service.getUser = function () {
            return user;
        };
    }
  })();
  