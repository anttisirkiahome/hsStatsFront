'use strict';

/**
 * @ngdoc service
 * @name hsStatsFrontApp.deckService
 * @description
 * # deckService
 * Factory in the hsStatsFrontApp.
 */
angular.module('hsStatsFrontApp')
  .factory('deckService', function ($http, $q) {

     function getClasses() {
      var d = $q.defer();
      $http.get('./dummy_api/classes.json')
        .success(function(data) {
          console.log('received ' , data);
          d.resolve(data);
        })
        .error(function() {
          d.reject('failed to get classes');
        });
        return d.promise;
     }

      function getDeckTypes() {
        var d = $q.defer();
        $http.get('./dummy_api/deckTypes.json')
          .success(function(data) {
            console.log('received ' , data);
            d.resolve(data);
          })
          .error(function() {
            d.reject('failed to get classes');
          });
          return d.promise;
       }

     var service = {
      classes: [],
      getClasses: getClasses,
      getDeckTypes: getDeckTypes
     };

     return service;



  });
