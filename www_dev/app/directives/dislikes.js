angular.module('myApp')
    .directive('dislikes', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/views/dislikes.html',
            scope: {
                dislikes: "="
            },
            controller: function($scope) {

                $scope.dislikes = JSON.parse(localStorage.getItem('dislikes'));
                //$scope.favourites = JSON.stringify(JSON.parse(localStorage.getItem('favourites')));

                $scope.removeFromDislikes = function(jokeId) {
                    for (var x = 0; x < $scope.dislikes.length; x++) {
                        if ($scope.dislikes[x].id === jokeId) {
                            $scope.dislikes.splice(x);
                            break;
                        }
                    }
                }


            }
        }
    })
