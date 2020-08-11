angular.module('myApp')
    .directive('jokelist', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/views/jokeslist.html',
            scope: {
                jokes: "="
            },
            controller: function($scope) {

            }
        }
    })
