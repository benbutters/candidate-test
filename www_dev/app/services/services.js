
angular.module('myApp').service('service', function() {

  this.formatDate = function(date) {
    date.setHours(0 + Math.round(date.getMinutes() / 60));
    date.setMinutes(0, 0, 0);
    return date;
  }

});