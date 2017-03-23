"use strict";
angular.module("attendance").controller("attendanceCtrl",["$scope","attendanceService",function($scope,as){
    
    $scope.date= new Date();
    
    
    
    
    
   $scope.arrAtt=as.attendanceServiceArray;
    
      $scope.arrAttPresent=as.attendanceServicePresent;  
        
      $scope.water=()=>{
          
          
          
          var datep={}
          
          $scope.arrAtt.map(function(item){
              
              if(item.status){
                  
                  item.date=$scope.date;
                  
                  
              
              
              if(datep[item.date]==undefined)
              
              {
                  datep[item.date]=[];
              }
                  
              
              if(datep[item.date])
                  
                datep[item.date].push(
                                        {
                      
                                            "name":item.name
                                        });
                  
              }
              
              
              
          });
          
          as.attendanceServicePresent.push(datep);
          console.log($scope.arrAttPresent);
          
          
      };  
    
    
    
        
        
        
    
    
}]);