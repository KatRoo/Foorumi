FoorumApp.controller('TopicsListController', function ($scope, $location, Api) {
    
    $scope.newTopicName = "";
    $scope.newTopicDescription = "";
    
    Api.getTopics().success(function (data, status, headers, config) {
        $scope.aiheet = data;
    })
            .error(function (data, status, headers, config) {
                console.log('Aiheiden haku ei onnistu.');
            });
            
    $scope.addTopic = function()    {
        Api.addTopic({"name": $scope.newTopicName, "description": $scope.newTopicDescription}).
                success(function (data, status, headers, config) {
                    $location.path('/topics/' + data.id);
                })
                .error(function (data, status, headers, config) {
                    console.log('Aiheen lisäys ei onnistu.');
                });
    }

});
