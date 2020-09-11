angular.module('myApp')
    .directive('jokelist', function(service) {
        return {
            restrict: 'E',
            templateUrl: 'app/views/jokeslist.html',
            scope: {
                jokes: "=",
                favourites: "=",
                dislikes: "="
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

                $scope.addToDislikes = function(jokeItem) {
                    jokeItem.updatedTime = new Date().getTime();
                    var duplicate = false;
                    if ($scope.dislikes && $scope.dislikes.length) {
                        for (var x = 0; x < $scope.dislikes.length; x++) {
                            if ($scope.dislikes[x].id === jokeItem.id) {
                                alert('This joke is already disliked');
                                duplicate = true;
                                break;
                            }
                        }
                        if (!duplicate) {
                            $scope.dislikes.push(jokeItem);
                        }
                    } else {
                        $scope.dislikes = [];
                        $scope.dislikes.push(jokeItem);
                    }
                    localStorage.setItem('dislikes', JSON.stringify($scope.dislikes));
                }

            }
        }
    })
