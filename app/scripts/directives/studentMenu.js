"use strict";
angular.module("attendance").directive("studentMenu",[function(){
        return{
        restrict:"EA",
        templateUrl:"/app/views/studentMenu.html",
            controller:"studentCtrl"
       /* controller:["$scope","passwordService",function($scope,ps){
            $scope.logot= ps.logout;
        }] */           
     }
}]);

