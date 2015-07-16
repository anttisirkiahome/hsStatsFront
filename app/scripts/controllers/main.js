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
  	console.log('MainCtrl');

  	deckService.getClasses().then(function(data) {
  		console.log('controller received' , data);
  		$scope.classes = data;
  	},
  	function(data) {
  		console.log('fail',data);
  	});

  	deckService.getDeckTypes().then(function(data) {
  		console.log('controller received deck types' , data);
  		$scope.deckTypes = data;
  	},
  	function(data) {
  		console.log('fail',data);
  	});
  });
