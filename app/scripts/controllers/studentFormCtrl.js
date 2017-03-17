"use strict";
angular.module("attendance").controller("studentFormCtrl",["$scope","studentformService",function($scope,ss){
    
    
    //Scope variable for biding form elements
    $scope.studentformModel={
        "firstname":"",
        "lastname":"",
        "address":"",
        "dob":"",
        "phone":"",
        "gender":"",
        "email":"",
        "gitusername":""
    };
    
     $scope.studentformModel=ss.studentformModels;
     
    
    $scope.submit=()=>{
        ss.setFirstname($scope.studentformModel.firstname);
        ss.setLastname($scope.studentformModel.lastname);
        ss.setAddress($scope.studentformModel.address);
        ss.setDOB($scope.studentformModel.dob);
        ss.setPhone($scope.studentformModel.phone);
        ss.setGender($scope.studentformModel.gender);
        ss.setEmail($scope.studentformModel.email);
        ss.setLastname($scope.studentformModel.lastname);
        ss.setGitusername($scope.studentformModel.gitusername);
        
        console.log($scope.studentformModel);
        //ss.validateUser();
      
        
    }
}]);