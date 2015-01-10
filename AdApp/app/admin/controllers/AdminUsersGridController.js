'use strict';

app.controller('AdminUsersGridController',
    function UsersGrid($scope, adminService) {
        adminService.getUsers(
            null,
            function success(data) {
                $scope.users = data;
            },
            function error(err) {
                console.log("Cannot load your ads", err);
            }
        );

    }
);