app.controller('userCtrl', function ($scope, $mdDialog) {

    $scope.save = function () {
        $mdDialog.hide({});
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    }
});