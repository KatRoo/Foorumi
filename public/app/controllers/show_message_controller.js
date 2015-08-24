FoorumApp.controller('ShowMessageController', function ($scope, $routeParams, Api) {
    $scope.newReplyContent = "";

    Api.getMessage($routeParams.id).
            success(function (data, status, headers, config) {
                $scope.viesti = data;
            })
            .error(function (data, status, headers, config) {
                console.log('Viestin haku ei onnistu.');
            });

    $scope.addReply = function () {
        Api.addMessage({"content": $scope.newReplyContent}, $scope.viesti.id).
                success(function (data, status, headers, config) {
                    $scope.viesti.Replies.push(data);
                })
                .error(function (data, status, headers, config) {
                    console.log('Vastauksen lisäys ei onnistu.');
                });
    }

});
