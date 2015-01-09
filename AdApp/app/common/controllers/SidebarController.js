'use strict';

app.controller('SidebarController',
    function ($scope, $rootScope, categoriesService, townsService) {
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.categoryClicked = function(clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
        };

        $scope.townClicked = function(clickedTownId) {
            $scope.selectedTownId = clickedTownId;
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
        };
    }
);