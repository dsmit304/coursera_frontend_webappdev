(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        // Variable Declaration
        $scope.changeBorder = "";
        $scope.changeColor = "";
        $scope.comment = "";
        $scope.lunch = "";
        $scope.message = "";

        $scope.checkIntakeAmount = function () {
            // Variable Declaration
            $scope.comment = ""; // Clears
            var count = 0;
            var lunch = $scope.lunch;
            var menu = lunch.split(",");

            if(!lunch) { // Checks for entered data
                $scope.changeBorder = "no-data-border";
                $scope.changeColor = "no-data-color";
                $scope.message = "Please enter data first";
            } else { // Entered data found
                for(var i = 0; i < menu.length; i++) { // Loops through array of lunch items
                    menu[i] = menu[i].replace(/  +/g, ' '); // Converts mutliple spaces into singlar space
                    if(!menu[i] || menu[i] == " ") { // Checks if current index is empty or a single space
                        $scope.comment = "Empty items are NOT counted";
                    } else { // Adds to count if current index has data
                        count++;
                    }
                }
                if(count <= 1 && menu[0] == "") { // Checks if count is 1 or below and the first menu item is empty
                    $scope.changeBorder = "no-data-border";
                    $scope.changeColor = "no-data-color";
                    $scope.message = "Please enter data first";
                } else if(count <= 3 ) { // Checks if count is 3 or below
                    $scope.changeBorder = "data-border";
                    $scope.changeColor = "data-color";
                    $scope.message = "Enjoy!";
                } else { // Count is greater than 3
                    $scope.changeBorder = "data-border";
                    $scope.changeColor = "data-color";
                    $scope.message = "Too much!";
                }
            }
        }
    }
})();