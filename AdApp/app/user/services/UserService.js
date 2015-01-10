'use strict';

app.factory('userService',
    function ($http, authService, baseServiceUrl) {
        return {
            getUserInfo : function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/profile',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getUserAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            }
        }
    }
);