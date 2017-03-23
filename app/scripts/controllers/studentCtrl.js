"use strict";
angular.module("attendance").controller("studentCtrl",["$scope","studentService",function($scope,ss){
    
     $scope.checkid=1;   
    
     $scope.update=(val)=>{
         alert();
       var x=val;
         
     $scope.checkid=x;
        
    }
   
    $scope.studentMenu= ss.studentServiceForm;
    
    $scope.dataStudentCtrl= ss.dataStudent;
    
    $scope.submitForm=()=>{
        
        
        var jo={
            
                "firstName":$scope.studentMenu.firstName,
                "lastName":$scope.studentMenu.lastName,
                "address":$scope.studentMenu.address,
                "dob":$scope.studentMenu.dob,
                "phone":$scope.studentMenu.phone,
                "gender":$scope.studentMenu.gender,
                "email":$scope.studentMenu.email,
                "gitusername":$scope.studentMenu.gitusername
            
        }
        
 /*       ss.setFirstName($scope.studentForm.firstName);
        ss.setLastName($scope.studentForm.lastName);
        ss.setAddress($scope.studentForm.address);
        ss.setDOB($scope.studentForm.dob);
        ss.setPhone($scope.studentForm.phone);
        ss.setGender($scope.studentForm.gender);
        ss.setEmail($scope.studentForm.email);
        ss.setGitusername($scope.studentForm.gitusername);*/
        
        ss.dataStudent.push(jo);
         
        console.log( $scope.dataStudentCtrl);
    }
    
    
     
}]);