'use strict';

/**
 * @ngdoc service
 * @name hsStatsFrontApp.errorInterceptor
 * @description
 * # errorInterceptor
 * Factory in the hsStatsFrontApp.
 */
angular.module('hsStatsFrontApp')
  .factory('errorInterceptor', ['$q', '$rootScope', '$location',
    function ($q, $rootScope, $location) {
        return {
            request: function (config) {
                return config || $q.when(config);
            },
            requestError: function(request){
                return $q.reject(request);
            },
            response: function (response) {
                return response || $q.when(response);
            },
            responseError: function (response) {
                if (response && response.status === 404) {
                }
                if (response && response.status >= 500) {
                }
                if (response && response.status === 401) {
                    window.location = '#/login';
                }
                return $q.reject(response);
            }
        };
}]);