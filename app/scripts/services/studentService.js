"use strict";
angular.module("attendance").service("studentService",[function(){
   
    this.dataStudent=[];
    
    this.studentServiceForm={       
   
        "firstName":"",
        "lastName":"",
        "address":"",
        "dob":"",
        "phone":"",
        "gender":"",
        "email":"",
        "gitusername":""
    };
    
    this.setFirstName=(fname)=>this.studentServiceForm.firstName=fname;
    this.setLastName=(lname)=>this.studentServiceForm.lastName=lname;
    this.setAddress=(add)=>this.studentServiceForm.address=add;
    this.setDOB=(dob)=>this.studentServiceForm.dob=dob;
    this.setPhone=(ph)=>this.studentServiceForm.phone=ph;
    this.setGender=(gen)=>this.studentServiceForm.gender=gen;
    this.setEmail=(email)=>this.studentServiceForm.email=email;
    this.setgitusername=(guser)=>this.studentServiceForm.gitusername=guser;
                                              
}]);