app.controller('usersCtrl', function ($scope, usersFactory, $mdSidenav) {
    usersFactory.getUsers().then(function (users) {
        $scope.users = users;
    }, function (msg) {
        alert(msg);
    });

    $scope.toggleSideNav = function () {
        $mdSidenav('left').toggle();
    }
});