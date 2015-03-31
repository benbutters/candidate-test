'use strict';

angular.module('Siemens').directive('siemensheader', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            logout: '@logout',
            title: '@title'
        },
        templateUrl: 'app/views/Header.html',

    };
});
