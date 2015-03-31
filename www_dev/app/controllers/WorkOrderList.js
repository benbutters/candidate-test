'use strict';

angular.module('Siemens').controller('WorkOrderList', function ( $scope, dummyData ) {

  var appointments=[];

  //parse appointments
  _.each(dummyData.mockJobs,function(obj) {
    console.log('obj',obj.appointmentImpl.APPOINTMENT_ID);
    var appId = obj.appointmentImpl.APPOINTMENT_ID;
    var jobs = obj.appointmentImpl.JOBS.JOB;
    
    _.each(jobs,function(item,index) {
      var job = {};
      job.index=index;
      job.jobNo=item.JOB_ID;
      job.desc=item.JOB_DESCRIPTION;
      job.appId = appId;
      appointments.push(job);
    });    
  });

  $scope.workOrders = appointments;

});