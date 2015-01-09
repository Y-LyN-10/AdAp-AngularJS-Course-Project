'use strict';

app.factory('categoriesService',
    function ($resource, baseServiceUrl) {
        var categoriesResource = $resource(
                baseServiceUrl + '/api/categories'
        );

        return {
            getCategories: function (success, error) {
                return categoriesResource.query(success, error);
            }
        }
    }
);