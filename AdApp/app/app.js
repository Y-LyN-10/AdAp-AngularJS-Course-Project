'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 3);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'app/common/views/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'app/account/views/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'app/account/views/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});
