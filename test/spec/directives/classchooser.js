'use strict';

describe('Directive: classChooser', function () {

  // load the directive's module
  beforeEach(module('hsStatsFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<class-chooser></class-chooser>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the classChooser directive');
  }));
});
