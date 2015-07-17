'use strict';

describe('Directive: previousGames', function () {

  // load the directive's module
  beforeEach(module('hsStatsFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<previous-games></previous-games>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the previousGames directive');
  }));
});
