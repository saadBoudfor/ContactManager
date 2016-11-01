var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngMdIcons']);


// app.config(function ($routeProvider) {
//   // $routeProvider
//   //     .when('/', {templateUrl: 'index.html', controller:'usersCtrl'})
//   //     .otherwise({redirectTo: '/'});
//
// });

app.config(function ($mdIconProvider, $mdThemingProvider) {
    $mdIconProvider
        .icon('menu', './assert/svg/menu.svg')
        .icon('google', './assert/svg/google_plus.svg', 512)
        .icon('hangouts', './assert/svg/hangouts.svg', 512)
        .icon('phone', './assert/svg/phone.svg', 512)
        .icon('twitter', './assert/svg/twitter.svg', 512)
        .defaultIconSet('./assert/svg/avatars.svg', 128);
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');
});