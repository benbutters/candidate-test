angular.module('myApp')
    .directive('favouritelist', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/views/favouritelist.html',
            scope: {
                favourites: "="
            },
            controller: function($scope) {

                $scope.favourites = JSON.stringify(JSON.parse(localStorage.getItem('favourites')));

                $scope.removeFromFavourites = function(jokeId) {
                    for (var x = 0; x < $scope.favourites.length; x++) {
                        if ($scope.favourites[x].id === jokeId) {
                            $scope.favourites.splice(x);
                            break;
                        }
                    }
                }


            }
        }
    })
