'use strict';

describe('Controller: LoginmodalctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('hsStatsFrontApp'));

  var LoginmodalctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginmodalctrlCtrl = $controller('LoginmodalctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoginmodalctrlCtrl.awesomeThings.length).toBe(3);
  });
});
