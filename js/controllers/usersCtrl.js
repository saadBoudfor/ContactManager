app.controller('usersCtrl', function ($scope, usersFactory, $mdSidenav, $mdToast) {
    $scope.searchText = '';
    $scope.selectedTab = 0;
    usersFactory.getUsers().then(function (users) {
        $scope.users = users;
        $scope.selectedUser = users[0];

    }, function (msg) {
        alert(msg);
    });

    $scope.toggleSideNav = function () {
        $mdSidenav('left').toggle();
    };

    $scope.selectUser = function (user) {
        $scope.selectedUser = user;
        $scope.selectedTab = 0;
        if($mdSidenav('left').isOpen()){
            $mdSidenav('left').close();
        }
    };
    
    $scope.removeNote = function (note) {
        var noteIndex  = $scope.selectedUser.notes.indexOf(note);
        $scope.selectedUser.notes.splice(noteIndex, 1);
        openToast('La note à bien été suprimée ! ');
    };


    function openToast(msg) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(msg)
                .position('top right')
                .hideDelay(3000)
        );
    }
});

