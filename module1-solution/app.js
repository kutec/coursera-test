(function(){
  'use strict';

  angular.module('ngAppWeek1', [])

    .controller("MainCtrl", ["$scope" ,function($scope){
      $scope.checkHealth = function(foodItems){

        if(foodItems){
          var str     = foodItems,
              newStr  = str.split(',').filter(function(item){ return item !== ''; });

          if(newStr.length <= 3){
            $scope.message = "Enjoy!";
          }
          if(newStr.length > 3){
            $scope.message = "Too much!";
          }

        }
        else{
          $scope.message = "Please enter data first";
        }

      }
    }]);

})();
