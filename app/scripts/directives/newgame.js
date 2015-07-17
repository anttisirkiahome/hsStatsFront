'use strict';

/**
 * @ngdoc directive
 * @name hsStatsFrontApp.directive:NewGame
 * @description
 * # NewGame
 */
angular.module('hsStatsFrontApp')
  .directive('newGame', function (GameService) {
    return {
      templateUrl: 'views/newGameForm.html',
      restrict: 'E',
      link: function postLink(scope) {
      	scope.submit = function() {
	  		console.log('submitted' , scope.game);
	  		GameService.saveGame(scope.game).then(function() {
	  			console.log('saved');
	  		}, function() {
	  			console.log('save failed');
  			});
  		};
      }
    };
  });
