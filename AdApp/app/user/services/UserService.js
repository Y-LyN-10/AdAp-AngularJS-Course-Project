'use strict';

app.factory('userService',
    function ($resource, baseServiceUrl) {
        var adsResource = $resource(
                baseServiceUrl + '/api/user/Profile',
            null,
            {
                'getAll': {method:'GET'}
            }
        );

        return {
            getFullUserData: function(params, success, error) {
                return adsResource.getAll(params, success, error);
            }
        }
    }
);