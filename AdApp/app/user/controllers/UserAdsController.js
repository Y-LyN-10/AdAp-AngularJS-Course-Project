'use strict';

app.controller('UserAdsController',
    function ($scope, userService, pageSize) {
        userService.getUserAds(
            null,
            function success(data) {
                $scope.ads = data;
            },
            function error(err) {
                console.log("Cannot load your ads", err);
            }
        );
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };
    }
);