//main body goes here
angular.module('myApp', [])
    .controller('myCtrl', function($scope){
        $scope.baseMealPrice;
        $scope.taxRate;
        $scope.tipPecentage;
        $scope.err=false;


        $scope.submit = function(){
            if ($scope.mealInput.$invalid){
                $scope.err=true;
            }
            console.log($scope.mealInput);
            console.log($scope.mealInput.baseMealPrice.$error)
            console.log($scope.mealInput.taxRate.$error)
            console.log($scope.mealInput.tipPecentage.$error)
        }

    });
