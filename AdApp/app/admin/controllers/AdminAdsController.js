'use strict';

app.controller('AdminAdsController',
    function ($scope, $location, adminAdsService, pageSize) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };

        $scope.reloadAds = function () {
            adminAdsService.getAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    console.log("Cannot load ads", err);
                }
            );
        };

        $scope.reloadAds();

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

        $scope.rejectAd = function(id) {
            adminAdsService.rejectAd(
                id,
                function success(data) {
                    alert('The ad is successfully rejected');
                    $location.path('#/admin/');
                },
                function error(err) {
                    console.log("This ad cannot be rejected", err);
                }
            );
        };

        $scope.approveAd = function(id) {
            adminAdsService.approveAd(
                id,
                function success(data) {
                    alert('The ad is successfully approved');
                    $location.path('#/admin/');
                },
                function error(err) {
                    console.log("This ad cannot be approved", err);
                }
            );
        };

    }
);
