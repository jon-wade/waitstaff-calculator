//main body goes here
angular.module('myApp', [])
    .controller('myCtrl', function($scope){
        $scope.baseMealPrice;
        $scope.taxRate;
        $scope.tipPercentage;
        $scope.err=false;
        $scope.subTotal=0;
        $scope.tip=0;
        $scope.customerTotal=0;


        $scope.submit = function(){
            if ($scope.mealInput.$invalid){
                $scope.err=true;
            }
            else {

                $scope.subTotal = ($scope.baseMealPrice*(1+($scope.taxRate/100)));
                $scope.tip = ($scope.baseMealPrice*($scope.tipPercentage/100));
                $scope.customerTotal = $scope.subTotal + $scope.tip;
            }




            console.log($scope.mealInput);
            console.log($scope.mealInput.baseMealPrice.$error);
            console.log($scope.mealInput.taxRate.$error);
            console.log($scope.mealInput.tipPercentage.$error);
        }

    });
