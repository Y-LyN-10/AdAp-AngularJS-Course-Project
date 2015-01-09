'use strict';

app.controller('RegisterController',
    function ($scope, $rootScope, $location, authService, townsService) {
        $rootScope.pageTitle = "Register";

        $scope.userData = {};
        $scope.towns = townsService.getTowns();

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    console.log("User registered successfully");
                    $location.path("/");
                },
                function error(err) {
                    console.log("User registration failed", err);
                }
            );
        };
    }
);
