FoorumApp.controller('ShowTopicController', function ($scope, $routeParams, $location, Api) {
    Api.getTopic($routeParams.id).
            success(function (data, status, headers, config) {
                $scope.aihe = data;
            })
            .error(function (data, status, headers, config) {
                console.log('Aiheen haku ei onnistu.');
            });
});
