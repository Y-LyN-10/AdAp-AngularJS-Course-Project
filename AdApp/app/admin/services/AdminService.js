'use strict';

app.factory('adminService',
    function ($resource, $http, authService, baseServiceUrl) {
        return {
            getUsers: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/users',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getTowns: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/towns',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getCategories: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/categories',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);