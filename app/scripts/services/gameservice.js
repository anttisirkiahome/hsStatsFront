'use strict';

/**
 * @ngdoc service
 * @name hsStatsFrontApp.GameService
 * @description
 * # GameService
 * Service in the hsStatsFrontApp.
 */
angular.module('hsStatsFrontApp')
  .service('GameService', function ($q, $http) {
     function saveGame(game) {
      var d = $q.defer();

      $http({
      	url: './dummy_api/game',
      	method: "POST",
      	data: { 'game' : game}
      }).then(function(response) {
      	console.log(response);
      	d.resolve(response);
      }, function(response) {
      	console.log(response);
      	d.reject();
      });

      return d.promise;
     }

     function getGames() {
      var d = $q.defer();
      $http.get('./dummy_api/games.json')
        .success(function(data) {
          d.resolve(data);
        })
        .error(function() {
          d.reject('failed to get games');
        });
        return d.promise;
     }

     var service = {
      saveGame: saveGame,
      getGames: getGames
     };

     return service;
  });
