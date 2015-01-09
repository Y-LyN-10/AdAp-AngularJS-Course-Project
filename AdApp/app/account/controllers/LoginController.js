'use strict';

app.controller('LoginController',
    function ($scope, $rootScope, $location, authService) {
        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    alert("Login successful");
                    $location.path("/");
                },
                function error(err) {
                    alert('Login failed');
                }
            );
        };
    }
);
