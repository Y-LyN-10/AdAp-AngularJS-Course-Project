'use strict';

app.controller('AdminListsController',
    function ($scope, adminService) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': 10
        };

        $scope.loadUsers = function () {
            adminService.getUsers(
                null,
                function success(data) {
                    $scope.users = data;
                },
                function error(err) {
                    console.log("Cannot load your ads", err);
                }
            );
        };

        $scope.loadTowns = function () {
            adminService.getTowns(
                null,
                function success(data) {
                    $scope.towns = data;
                },
                function error(err) {
                    console.log("Cannot load your ads", err);
                }
            );
        };

        $scope.loadCategories = function () {
            adminService.getCategories(
                null,
                function success(data) {
                    $scope.categories = data;
                },
                function error(err) {
                    console.log("Cannot load your ads", err);
                }
            );
        };

        $scope.loadUsers();
        $scope.loadTowns();
        $scope.loadCategories();
    }
);