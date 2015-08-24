FoorumApp.controller('UsersController', function ($scope, $location, Api) {
    
    $scope.username = "";
    $scope.password = "";
    $scope.newusername = "";
    $scope.newpassword = "";
    
    $scope.errorMessage = "";
    $scope.login = function () {
        Api.login({username: $scope.username, password: $scope.password})
                .success(function (user) {
                    $location.path('/');
                })
                .error(function () {
                    console.log('Kirjautuminen epäonnistui! Lisätään käyttäjälle virheilmoitus');
                    $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
                });
    }
    
    $scope.register = function () {
        Api.register({username: $scope.newUsername, password: $scope.newPassword})
                .success(function (user) {
                    $location.path('/');
                })
                .error(function (viesti) {
                    console.log('Kirjautuminen epäonnistui! Lisätään käyttäjälle virheilmoitus');
                    $scope.errorMessage = viesti;
                });
    }
});
