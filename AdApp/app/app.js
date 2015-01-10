'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 6);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/common/views/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'app/account/views/login.html',
            controller: 'LoginController',
            resolve: {
                permission: function (authService) {
                    if(authService.isLoggedIn){
                        authService.logout();
                    }

                    return true;
                }
            }
        })
        .when('/register', {
            templateUrl: 'app/account/views/register.html',
            controller: 'RegisterController',
            resolve: {
                permission: function (authService) {
                    if(authService.isLoggedIn){
                       authService.logout();
                    }

                    return true;
                }
            }
        })
        .when('/user/profile', {
            templateUrl: 'app/user/views/profile.html',
            controller: 'UserController',
            resolve: {
                permission: function(authService, $route) {
                    return authService.getPermission();
                }
            }
        })
        .when('/user', {
            redirectTo: '/user/profile'
        })
        .when('/user/ads', {
            templateUrl: 'app/user/views/my-ads.html',
            controller: 'UserAdsController',
            resolve: {
                permission: function(authService, $route) {
                    return authService.getPermission();
                }
            }
        })
        .when('/user/ads/publish', {
            templateUrl: 'app/user/views/add-ad.html',
            resolve: {
                permission: function(authService, $route) {
                    return authService.getPermission();
                }
            }
        })
        .when('/user/ads/edit/:id', {
            templateUrl: 'app/user/views/edit-ad.html',
            resolve: {
                permission: function(authService, $route) {
                    return authService.getPermission();
                }
            }
        })
        .when('/admin/users/', {
            templateUrl: 'app/admin/views/list-users.html',
            resolve: {
                permission: function(authService, $route) {
                    return authService.getAdminPermission();
                }
            }
        })
        .when('/admin/towns/', {
            templateUrl: 'app/admin/views/list-towns.html',
            resolve: {
                permission: function(authService, $route) {
                    return authService.getAdminPermission();
                }
            }
        })
        .when('/admin/categories/', {
            templateUrl: 'app/admin/views/list-categories.html',
            resolve: {
                permission: function(authService, $route) {
                    return authService.getAdminPermission();
                }
            }
        })
        .when('/forbidden',{
            templateUrl: 'app/common/views/unauthorized-access.html'
        })
        .otherwise(
            { redirectTo: '/' }
        );
});
