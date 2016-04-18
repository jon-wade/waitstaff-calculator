//main body goes here
angular.module('myApp', [])
    .controller('myCtrl', function($scope){
        $scope.baseMealPrice;


        $scope.submit = function(){
            console.log($scope.mealInput);
            console.log($scope.mealInput.baseMealPrice.$error)
        }

    });
