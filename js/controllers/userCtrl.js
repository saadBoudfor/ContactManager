var svgLenght=14;

app.controller('userCtrl', function ($scope, $mdDialog) {

    $scope.save = function () {
        $mdDialog.hide($scope.user);
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.user = {};

    // a mettre directement dans le userDialog.html ??

    $scope.avatars=[];
    for(var i=1; i<svgLenght; i++){
        $scope.avatars.push('svg-'+i);
    }
});