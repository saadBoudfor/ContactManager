app.controller('mainCtrl', function ($scope, usersFactory, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
    $scope.searchText = '';
    $scope.selectedTab = 0;
    $scope.newNote = {title: '', date: ''};
    usersFactory.getUsers().then(function (users) {
        $scope.users = users;
        //TODO: userNotFound template !
        if($scope.users.length!=0) {
            $scope.selectedUser = users[0];
        }else{
            $scope.selectedUser = {
                avatar: 'svg-1',
                name: 'no name',
                bio: 'no bio available',
                notes: []
            }
        }
        usersFactory.selectUser($scope.selectedUser);

    }, function (msg) {
        alert(msg);
    });

    $scope.toggleSideNav = function () {
        $mdSidenav('left').toggle();
    };

    $scope.selectUser = function (user) {
        $scope.selectedUser = user;
        usersFactory.selectUser($scope.selectedUser);
        $scope.selectedTab = 0;
        if ($mdSidenav('left').isOpen()) {
            $mdSidenav('left').close();
        }
    };

    $scope.removeNote = function (note) {
        var noteIndex = $scope.selectedUser.notes.indexOf(note);
        $scope.selectedUser.notes.splice(noteIndex, 1);
        usersFactory.storeUsers($scope.users);
        openToast('La note à bien été suprimée ! ');
    };

    $scope.removeAllNotes = function (ev) {
        $mdDialog.show(openConfirm('Vous êtes sur de vouloir supprimer toutes les notes ?', 'Suppression des notes', 'D\'accord', 'Non', ev))
            .then(function () {
                $scope.selectedUser.notes = [];
                usersFactory.storeUsers($scope.users);
            });
    };

    $scope.showContactOptions = function ($event) {
        $mdBottomSheet.show({
            parent: angular.element(document.getElementById('wrapper')),
            templateUrl: './partials/contactUser.html',
            controller: 'contactCtrl',
            targetEvent: $event,
            clickOutsideToClose: true
        }).then(function (clickedItem) {
            console.log(clickedItem.name + ' clicked !');
        })
    };


    $scope.addUser = function ($event) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
        $mdDialog.show({
            templateUrl: './partials/userDialog.html',
            parent: angular.element(document.body),
            controller: 'userCtrl',
            clickOutsideToClose: true,
            fullScreen: useFullScreen,
            targetEvent: $event
        }).then(function (user) {
            var formatedUser = {
                name: user.firstName + ' ' +user.lastName,
                bio: user.biography,
                avatar: user.avatar,
                notes: []
            };
            $scope.users.push(formatedUser);
            $scope.selectedUser = formatedUser;
            usersFactory.selectUser($scope.selectedUser);
            usersFactory.storeUsers($scope.users);

            openToast('L\'utilisateur à été ajouté avec succès :) ');
        });
    };
    $scope.setFormScope = function (scope) {
            app.formScope = scope;
    };

    $scope.addNote = function () {
        $scope.selectedUser.notes.push({title: $scope.newNote.title, date: getFormatedDate($scope.newNote.date)});
        $scope.newNote = {title: '', date: ''};
        // $scope.$apply();
        openToast('La note à été ajoutée! ');
    };

    // Fonctions utiles ...
    function openConfirm(msg, title, OkText, cancelText, ev) {
        return $mdDialog.confirm()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title(title)
            .textContent(msg)
            .ariaLabel('Alert Dialog Demo')
            .ok(OkText)
            .cancel(cancelText)
            .targetEvent(ev);
    }


    function openToast(msg) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(msg)
                .position('top right')
                .hideDelay(3000)
        );
    }

    function getFormatedDate(date) {
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();
        return [dd, mm, date.getFullYear()].join('/'); // padding
    }
});

