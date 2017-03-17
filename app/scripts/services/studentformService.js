"use strict";
angular.module("attendance").service("studentformService",[function(){
    var _this=this;
    this.auth = false;
    
    
    var studentformModel={
        "firstname":"",
        "lastname":"",
        "address":"",
        "dob":"",
        "phone":"",
        "gender":"",
        "email":"",
        "gitusername":""
    };
    
    this.submit=()=>_this.auth = false;    
   
        
    this.setFirstname=(fname)=>studentformModel.firstname=fname;
    this.setLastname=(lname)=>studentformModel.lastname=lname;
    this.setAddress=(add)=>studentformModel.address=add;
    this.setDOB=(dob)=>studentformModel.dob=dob;
    this.setPhone=(ph)=>studentformModel.phone=ph;
    this.setGender=(gen)=>studentformModel.gender=gen;
    this.setEmail=(email)=>studentformModel.email=email;
    this.setGitusername=(guser)=>studentformModel.gitusername=guser;
    
    this.getFirstname=(fname)=>studentformModel.firstname;
    this.getLastname=(lname)=>studnetformModel.lastname;
    this.getAddress=(add)=>studentformModel.address;
    this.getDOB=(dob)=>studentformModel.dob;
    this.getPhone=(ph)=>studentformModel.phone;
    this.getGender=(gen)=>studentformModel.gender;                                         
    this.getEmail=(email)=>studentformModel.email;                                         
    this.getGitusername=(guser)=>studentformModel.gitusername;                                                
}]);