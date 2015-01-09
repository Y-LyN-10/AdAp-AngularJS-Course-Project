'use strict';

app.controller('RegisterController',
    function ($scope, $rootScope, $location, authService) {
        $rootScope.pageTitle = "Register";

        $scope.userData = {};

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    alert("User registered successfully");
                    $location.path("/");
                },
                function error(err) {
                    alert("User registration failed", err);
                }
            );
        };
    }
);
