angular.module('myApp')
    .directive('joke', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/views/joke.html',
            scope: {
                data: "="
            },
            controller: function($scope) {
                $scope.showPunchline = false;
                $scope.togglePunchline = function() {
                    $scope.showPunchline = !$scope.showPunchline;
                }
            }
        }
    })
