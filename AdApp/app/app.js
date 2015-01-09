'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'app/shared/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'app/components/public/views/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'app/components/public/views/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});
