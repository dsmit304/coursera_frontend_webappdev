(function () {
    'use strict';

    angular.module('data')
    .component('categories', {
        templateUrl: 'src/menu/templates/categories.html',
        bindings: {
            categoriesList: '<'
        }
    });
})();
    