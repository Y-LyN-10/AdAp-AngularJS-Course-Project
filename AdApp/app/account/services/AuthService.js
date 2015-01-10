'use strict';

app.factory('authService',
    function ($http, $rootScope, $location, baseServiceUrl) {
        return {
            login: function(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/login',
                    data: userData
                };
                $http(request).success(function(data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            register: function(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/register',
                    data: userData
                };
                $http(request).success(function(data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            logout: function() {
                delete sessionStorage['currentUser'];
            },

            getCurrentUser : function() {
                var userObject = sessionStorage['currentUser'];
                if (userObject) {
                    return JSON.parse(sessionStorage['currentUser']);
                }
            },

            getPermission: function (data, success, error) {
                var currentUser = this.getCurrentUser();
                var ifPermissionPassed = false;

                if(currentUser != undefined){
                    ifPermissionPassed = true;
                }

                if (!ifPermissionPassed) {
                    $location.path('/forbidden');
                    $rootScope.$on('$locationChangeSuccess', function (next, current) {
                        return false;
                    });
                } else {
                    return true;
                }
            },

            getAdminPermission: function (data, success, error) {
                var currentUser = this.getCurrentUser();
                var ifPermissionPassed = false;

                if((currentUser != undefined) && (currentUser.isAdmin)){
                    ifPermissionPassed = true;
                }

                if (!ifPermissionPassed) {
                    $location.path('/forbidden');
                    $rootScope.$on('$locationChangeSuccess', function (next, current) {
                        return false;
                    });
                } else {
                    return true;
                }
            },

            isAnonymous : function() {
                return sessionStorage['currentUser'] == undefined;
            },

            isLoggedIn : function() {
                return sessionStorage['currentUser'] != undefined;
            },

            isRegularUser : function() {
                var currentUser = this.getCurrentUser();
                return (currentUser != undefined) && (!currentUser.isAdmin);
            },

            isAdmin : function() {
                var currentUser = this.getCurrentUser();
                return (currentUser != undefined) && (currentUser.isAdmin);
            },

            getAuthHeaders : function() {
                var headers = {};
                var currentUser = this.getCurrentUser();
                if (currentUser) {
                    headers['Authorization'] = 'Bearer ' + currentUser.access_token;
                }
                return headers;
            }
        }
    }
);
