"use strict";
angular.module("attendance").controller("reportCtrl",["$scope","attendanceService", function($scope, rs){    
    
   
    
    $scope.presentReport=rs.attendanceServicePresent;
    
    
}]);