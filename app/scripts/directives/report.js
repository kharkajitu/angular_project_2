"use strict";
angular.module("attendance").directive("report",function(){
    return{
        restrict:"EA",
        templateUrl:"/app/views/report.html",
        controller:"reportCtrl"
    }
});