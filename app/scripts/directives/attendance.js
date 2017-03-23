"use strict";
angular.module("attendance").directive("attendance",function(){
    return{
        restrict:"EA",
        templateUrl:"/app/views/attendance.html",
        controller:"attendanceCtrl"
    }
});