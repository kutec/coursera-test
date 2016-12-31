(function(){
  'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);
    
    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    
    function ToBuyController(ShoppingListCheckOffService){
        var shoppingList = this;
        
        shoppingList.items = ShoppingListCheckOffService.getList();
        
        shoppingList.boughtAction = function($index){
            ShoppingListCheckOffService.boughtAction($index);
        }
    }
    
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var boughtList = this;
        
        boughtList.items = ShoppingListCheckOffService.getBoughtItems();
    }
    
    function ShoppingListCheckOffService(){
        var service = this,
            shoppingItems = [],
            boughtItems = [];
            
        shoppingItems = [
            { "name": "cookies", "quantity": 10 },
            { "name": "chocolates", "quantity": 5 },
            { "name": "pastries", "quantity": 7 },
            { "name": "donutes", "quantity": 3 },
            { "name": "cup cakes", "quantity": 2 }
        ];
        
        service.getList = function(){
            return shoppingItems;
        }
        
        service.boughtAction = function($index){
            boughtItems.push(shoppingItems[$index]);
            shoppingItems.splice($index, 1);
        }
        
        service.getBoughtItems = function(){
            return boughtItems;
        }
    }
    
    
    /*
    
    // INITIAL TRIED USING SINGLE CONTROLLER
    
    .controller("CheckOffShoppingApp", ["$scope" ,function($scope){
        
        $scope.shoppingItems = [
            { "name": "cookies", "quantity": 10 },
            { "name": "chocolates", "quantity": 5 },
            { "name": "pastries", "quantity": 7 },
            { "name": "donutes", "quantity": 3 },
            { "name": "cup cakes", "quantity": 2 }
        ];
        $scope.boughtItems = [];
        
        $scope.boughtAction = function($index){
            $scope.boughtItems.push({"quantity": $scope.shoppingItems[$index].quantity, "name": $scope.shoppingItems[$index].name});
            var boughtItem = $scope.shoppingItems.splice($index, 1);
        }
        
        
        
    }]);*/

})();
