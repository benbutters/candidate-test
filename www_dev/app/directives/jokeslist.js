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
                        for (var x = 0; x < $scope.favourites.length; x++) {
                            if ($scope.favourites[x].id === jokeItem.id) {
                                alert('This joke is already a favourite');
                                duplicate = true;
                                break;
                            }
                        }
                        if (!duplicate) {
                            $scope.favourites.push(jokeItem);
                        }
                    } else {
                        $scope.favourites = [];
                        $scope.favourites.push(jokeItem);
                    }
                    localStorage.setItem('favourites', JSON.stringify($scope.favourites));
                }

            }
        }
    })
