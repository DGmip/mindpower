'use strict';

describe('Controller: AffiliatesCtrl', function () {

  // load the controller's module
  beforeEach(module('mindpowerApp'));

  var AffiliatesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AffiliatesCtrl = $controller('AffiliatesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AffiliatesCtrl.awesomeThings.length).toBe(3);
  });
});
