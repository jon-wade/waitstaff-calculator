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
        $scope.tipTotal=0;
        $scope.mealCount=0;
        $scope.averageTip=0;


        $scope.submit = function(){
            if ($scope.mealInput.$invalid){
                $scope.err=true;
            }
            else {

                $scope.subTotal = ($scope.baseMealPrice*(1+($scope.taxRate/100)));
                $scope.tip = ($scope.baseMealPrice*($scope.tipPercentage/100));
                $scope.customerTotal = $scope.subTotal + $scope.tip;

                $scope.tipTotal += $scope.tip;
                $scope.mealCount++;
                $scope.averageTip = $scope.tipTotal/$scope.mealCount;
            }

            console.log($scope.mealInput);
            console.log($scope.mealInput.baseMealPrice.$error);
            console.log($scope.mealInput.taxRate.$error);
            console.log($scope.mealInput.tipPercentage.$error);
        };

        $scope.cancel = function(){
            console.log('clearing variables');
            $scope.baseMealPrice=undefined;
            $scope.taxRate=undefined;
            $scope.tipPercentage=undefined;
        };

    });
