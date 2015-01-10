'use strict';

app.controller('HomeController',
    function ($scope, adsService, pageSize) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };
        $scope.userAdsParams = {
            'startPage': 1,
            'pageSize':  pageSize
        };

        $scope.reloadAds = function () {
            adsService.getAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    console.log("Cannot load ads", err);
                }
            );
        };

        $scope.loadUserAds = function() {
            adsService.getUserAds(
                $scope.userAdsParams,
                function success(data) {
                    console.log(data);
                    $scope.userAds = data;
                },
                function error(err) {
                    console.log("Cannot load ads", err);
                }
            );
        };

        $scope.reloadAds();
        $scope.loadUserAds();

        $scope.$on("categorySelectionChanged", function (event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

        $scope.$on("townSelectionChanged", function (event, selectedTownId) {
            $scope.adsParams.townId = selectedTownId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });
    }
);
