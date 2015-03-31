'use strict';

var app = angular.module('Siemens', ['ngRoute',
    'ngSanitize',
    'fhcloud'
]);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/Login.html',
            controller: 'LoginCtrl'
        })

        .when('/WorkOrderList', {
            templateUrl: 'app/views/WorkOrderList.html',
            controller: 'WorkOrderList'
        })

        .otherwise({
        redirectTo: '/'
        });
});