(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

    // Categories Controller
    CategoriesController.$inject = ['categoriesList']
    function CategoriesController(categoriesList) {
        var categoriesCtrl = this;

        categoriesCtrl.categoriesList = categoriesList.data;
    }
})();
