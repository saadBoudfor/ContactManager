app.controller('usersCtrl', function ($scope, usersFactory) {
    usersFactory.getUsers().then(function (users) {
        $scope.users = users;
    }, function (msg) {
        alert(msg);
    })
});