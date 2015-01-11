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

            // CRUD User Ads
            addAd: function (data, success, error) {
                var request = {
                    method: 'POST',
                    data: data,
                    url: baseServiceUrl + '/api/user/ads',
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
            },
            editAd: function (data, success, error) {
                var request = {
                    method: 'PUT',
                    data: data,
                    url: baseServiceUrl + '/api/user/ads/'+ data.id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            deleteAd: function (id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/user/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);