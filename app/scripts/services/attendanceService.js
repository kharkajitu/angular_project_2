"use strict";
angular.module("attendance").service("attendanceService",[function(){
    
    /*this.attendanceArray=[];
    
    var date={       
   
        "FullName":"",
        "Date":"",
        "Present":"",
        "Absent":"",
       
    };
    
    this.setFullName=(fname)=>this.attendanceService.FirstName=fname;
    this.setDate=(date)=>this.attendanceService.Date=date;
    this.setPresent=(pst)=>this.attendanceService.Present=pst;
    this.setAbsent=(abs)=>this.attendanceService.Absent=abs;*/
    
   
      this.attendanceServiceArray=[
        
        
        {
           "name":"Jeetu",
            "sid":"1"
                        
        },
         {
           "name":"shrawan",
            "sid":"2"
                        
        },
         {
           "name":"sudeep",
            "sid":"3"
                        
        }
        
        
        
        
    ];
    
    this.attendanceServicePresent=[];
    
    
    
    
}]);