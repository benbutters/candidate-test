angular.module('Siemens').controller('LoginCtrl', function($scope, $location) {
  'use strict';

  $scope.login = function() {
    console.log('hi dere');
    $location.path('/WorkOrderList');
  };
});