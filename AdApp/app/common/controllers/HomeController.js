'use strict';

app.controller('HomeController',
   function ($scope, adsService) {
       $scope.adsParams = {};

       $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
           $scope.adsParams.categoryId = selectedCategoryId;
           console.log(selectedCategoryId);
       });

       $scope.$on("townSelectionChanged", function(event, selectedTownId) {
           $scope.adsParams.townId = selectedTownId;
           console.log(selectedTownId);
       });
   }
);
