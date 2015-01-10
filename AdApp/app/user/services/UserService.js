'use strict';

app.factory('userService',
    function ($resource, baseServiceUrl) {
        var userResource = $resource(
                baseServiceUrl + '/api/user/Profile',
            null,
            {
                'getAll': {method:'GET'}
            }
        );

        return {
            getFullUserData: function(params, success, error) {
                return userResource.getAll(params, success, error);
            }
        }
    }
);