(function () {
    'use strict';
    // AngularJS Setup
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page by default
      $urlRouterProvider.otherwise('/');
    
      // Setup UI states
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menu/templates/home.html'
      })
    
      // Categories page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menu/templates/categories.html',
        controller: 'CategoriesController as categoriesCtrl',
        resolve: {
          categoriesList: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      // Items page
      .state('categoriesItemsList', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/menu/templates/items.html',
        controller: 'ItemsController as itemsCtrl',
        resolve: {
          itemsList: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
    }
})();