'use strict';

app.controller('AppController',
    function ($scope, $location, authService) {
        $scope.authService = authService;

        $scope.logout = function() {
            authService.logout();
            alert("Logout successful");
            $location.path('/');
        };
    }
);