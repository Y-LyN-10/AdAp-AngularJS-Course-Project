'use strict';

app.factory('adsService',
    function ($resource, $http, baseServiceUrl, authService) {
        $http.defaults.headers.common['Authorization'] = authService.getAuthHeaders().Authorization ;

        var adsResource = $resource(
            baseServiceUrl + '/api/ads',
            null,
            {
                'getAll': {method:'GET'}
            }
        );

        var userAdsResource = $resource(
            baseServiceUrl + '/user/ads',
            authService.getAuthHeaders().Authorization,
        null,
            {
                'getAllUSerAds': {method: 'Get'}
            }
        );

        return {
            getAds: function(params, success, error) {
                return adsResource.getAll(params, success, error);
            },
            getUserAds: function(params, success, error) {
                return userAdsResource.getAllUSerAds(params, success, error);
            }
        }
    }
);