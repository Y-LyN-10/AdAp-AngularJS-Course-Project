'use strict';

app.controller('AdminListsController',
    function ($scope, adminService, $location) {
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

        $scope.deleteCategory = function(categoryId) {
            adminService.deleteCategory(
                categoryId,
                function success(data) {
                    alert('The category  is successfully deleted');
                    $location.path('/admin/categories');
                },
                function error(err) {
                    console.log("This category cannot be deleted", err);
                }
            );
        };

        $scope.deleteTown = function(townId) {
            adminService.deleteTown(
                townId,
                function success(data) {
                    alert('The town is successfully deleted');
                    $location.path('/admin/towns');
                },
                function error(err) {
                    console.log("This town cannot be deleted", err);
                }
            );
        };

        $scope.deleteUser = function(userId) {
            adminService.deleteUser(
                userId,
                function success(data) {
                    alert('The user is successfully deleted');
                    $location.path('/admin/users');
                },
                function error(err) {
                    console.log("This user cannot be deleted", err);
                }
            );
        };
    }
);