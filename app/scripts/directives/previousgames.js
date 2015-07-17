'use strict';

/**
 * @ngdoc directive
 * @name hsStatsFrontApp.directive:previousGames
 * @description
 * # previousGames
 */
angular.module('hsStatsFrontApp')
  .directive('previousGames', function (GameService) {
    return {
      templateUrl: 'views/previousGames.html',
      restrict: 'E',
      link: function postLink() {
      		GameService.getGames().then(function(data) {
      			console.log('previous games ' , data);
      		});
      }
    };
  });
