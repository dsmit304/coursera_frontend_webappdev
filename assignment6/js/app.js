(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.changeClass = "";
        $scope.comment = "";
        $scope.lunch = "";
        $scope.message = "";

        $scope.checkIntakeAmount = function () {
            var changecss = "";
            var comment = "";
            var count = 0;
            var lunch = $scope.lunch;
            var menu = lunch.split(", ");
            var message = "";

            if(!lunch) {
                changecss = "no-data";
                message = "Please enter data first";
            } else {
                for(var i = 0; i < menu.length; i++) {
                    if(!menu[i]) {
                        comment = "Empty items are NOT counted";
                    } else {
                        count++;
                    }
                }
                if(count <= 1 && menu[0] == "") {
                    changecss = "no-data";
                    message = "Please enter data first";
                } else if(count <= 3 ) {
                    changecss = "data";
                    message = "Enjoy!";
                } else {
                    changecss = "data";
                    message = "Too much!";
                }
            }
            $scope.changeClass = change;
            $scope.comment = comment;
            $scope.message = message;
        }
    }
})();