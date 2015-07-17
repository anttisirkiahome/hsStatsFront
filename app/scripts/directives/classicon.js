'use strict';

/**
 * @ngdoc directive
 * @name hsStatsFrontApp.directive:classIcon
 * @description
 * # classIcon
 */
angular.module('hsStatsFrontApp')
  .directive('classIcon', function () {
    return {
      template: '',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var html = '<img src="./img/'+angular.lowercase(attrs.class)+'.png" ></img>';
        element.replaceWith(html);
      }
    };
  });
