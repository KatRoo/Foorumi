FoorumApp.controller('ShowTopicController', function ($scope, $routeParams, $location, Api) {
    $scope.newTitle = "";
    $scope.newContent = "";
    
    Api.getTopic($routeParams.id).
            success(function (data, status, headers, config) {
                $scope.aihe = data;
            })
            .error(function (data, status, headers, config) {
                console.log('Aiheen haku ei onnistu.');
            });

    $scope.addMessage = function () {
        Api.addMessage({"title": $scope.newTitle, "content": $scope.newContent}, $scope.aihe.id).
                success(function (data, status, headers, config) {
                    $location.path('/messages/' + data.id);
                })
                .error(function (data, status, headers, config) {
                    console.log('Viestin lisäys ei onnistu.');
                });
    }
});
