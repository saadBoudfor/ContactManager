var app = angular.module('app', ['ngRoute', 'ngMaterial']);


app.config(function ($routeProvider) {
  $routeProvider
      .when('/', {templateUrl: 'partials/home.html', controller:'usersCtrl'})
      .otherwise({redirectTo: '/'});

});

