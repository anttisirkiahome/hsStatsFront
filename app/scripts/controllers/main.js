'use strict';

/**
 * @ngdoc function
 * @name hsStatsFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hsStatsFrontApp
 */
angular.module('hsStatsFrontApp')
  .controller('MainCtrl', function ($scope, deckService, _) {

  	//init game model
  	$scope.game = {
  		playerClass: '',
  		playerDeckType: '',
  		opponentClass: '',
  		opponentDeckType: '',
  		victory: false,
  		comment: ''
  	};

  	deckService.getClasses().then(function(data) {
  		$scope.classes = data;

  		_.each($scope.classes, function(item) {
  			item.deckTypes.push('Undefined');
  		});

  		$scope.game.playerDeckType = 'Undefined';
  		$scope.game.opponentDeckType = 'Undefined';
  	},
  	function(data) {
  		console.log('fail',data); // TODO awesome error handling
  	});

  });
