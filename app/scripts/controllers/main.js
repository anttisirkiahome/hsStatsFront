'use strict';

/**
 * @ngdoc function
 * @name hsStatsFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hsStatsFrontApp
 */
angular.module('hsStatsFrontApp')
  .controller('MainCtrl', function ($scope, deckService) {

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
  		console.log('controller received' , data);
  		$scope.classes = data;
  	},
  	function(data) {
  		console.log('fail',data);
  	});

  	$scope.submit = function() {
  		console.log('submitted' , $scope.game);
  	};
  });
