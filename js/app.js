var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngMdIcons']);


// app.config(function ($routeProvider) {
//   // $routeProvider
//   //     .when('/', {templateUrl: 'index.html', controller:'usersCtrl'})
//   //     .otherwise({redirectTo: '/'});
//
// });

app.config(function ($mdIconProvider, $mdThemingProvider) {
    $mdIconProvider.icon('menu', './assert/svg/menu.svg');
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');
});