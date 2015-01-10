'use strict';

app.controller('SidebarController',
    function ($scope, userService) {
        $scope.userProfile = userService.getFullUserData();
    }
);