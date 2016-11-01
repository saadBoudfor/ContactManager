app.controller('contactCtrl', function (usersFactory, $mdBottomSheet, $scope) {
    $scope.selectedUser = usersFactory.getSelectedUser();
    $scope.actions = [
        {name: 'Télephone', icon: 'phone'},
        {name: 'Twitter', icon: 'twitter'},
        {name: 'Google+', icon: 'google'},
        {name: 'Hangout', icon: 'hangouts'}
    ]

    $scope.submitContact = function (action) {
        $mdBottomSheet.hide(action);
    }

});