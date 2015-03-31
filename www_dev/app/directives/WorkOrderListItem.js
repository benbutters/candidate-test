'use strict';

angular.module('Siemens').directive('workorderlistitem', function($window, $rootScope) {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'app/views/WorkOrderListItem.html',
        // scope: {
        //     wo: '='
        // },
        // link: function(scope) {

        //     scope.selectWorkOrder = function(wo) {

        //         // Don't do anything if status is ABORT or TASKCOMPLETE
        //         var currentState = wo.state.currentState;

        //         function loadWorkOrder () {
        //             $rootScope.$broadcast('loadingoverlay.show');

        //             $window.setTimeout(function() {
        //                 wo.change(wo.id);
        //             }, 250);
        //         }

        //         if (currentState == 'ABORTED' || currentState == 'FEEDBACKCOMPLETE') {
        //             // TODO: not sure what to do here as they are allowed to see the summary screen
        //             // return alert('Can not open COMPLETED or ABORTED work order.');
        //             // console.log('state is aborted and complete');
        //             loadWorkOrder();
        //         } else {
        //             loadWorkOrder();
        //         }
        //     };
        // }
    };
});


