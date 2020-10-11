(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.changeBorder = "";
        $scope.changeColor = "";
        $scope.comment = "";
        $scope.lunch = "";
        $scope.message = "";

        $scope.checkIntakeAmount = function () {
            var border = "";
            var color = "";
            var comment = "";
            var count = 0;
            var lunch = $scope.lunch;
            var menu = lunch.split(", ");
            var message = "";

            if(!lunch) {
                border = "no-data-border";
                color = "no-data-color";
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
                    border = "no-data-border";
                    color = "no-data-color";
                    message = "Please enter data first";
                } else if(count <= 3 ) {
                    border = "data-border";
                    color = "data-color";
                    message = "Enjoy!";
                } else {
                    border = "data-border";
                    color = "data-color";
                    message = "Too much!";
                }
            }
            $scope.changeBorder = border;
            $scope.changeColor = color;
            $scope.comment = comment;
            $scope.message = message;
        }
    }
})();