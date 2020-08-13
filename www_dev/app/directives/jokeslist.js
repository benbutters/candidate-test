angular.module('myApp')
    .directive('jokelist', function(service) {
        return {
            restrict: 'E',
            templateUrl: 'app/views/jokeslist.html',
            scope: {
                jokes: "=",
                favourites: "="
            },
            controller: function($scope) {

                $scope.addToFavourites = function(jokeItem) {
                    jokeItem.updatedTime = service.formatDate(new Date()).getTime();
                    var duplicate = false;
                    if ($scope.favourites && $scope.favourites.length) {
                        if (!duplicate) {
                            $scope.favourites.push(jokeItem);
                        }
                    } else {
                        $scope.favourites = [];
                        $scope.favourites.push(jokeItem);
                    }
                    localStorage.setItem('favourites', $scope.favourites);
                }

            }
        }
    })
