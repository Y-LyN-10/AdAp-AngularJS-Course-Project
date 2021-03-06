'use strict';

app.factory('adsService',
    function ($resource, $http, baseServiceUrl, authService) {
        var adsResource = $resource(
            baseServiceUrl + '/api/ads',
            null,
            {
                'getAll': {method:'GET'}
            }
        );

        return {
            getAds: function(params, success, error) {
                return adsResource.getAll(params, success, error);
            }
        }
    }
);