'use strict';

describe('Controller: PrivacyPolicyCtrl', function () {

  // load the controller's module
  beforeEach(module('mindpowerApp'));

  var PrivacyPolicyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrivacyPolicyCtrl = $controller('PrivacyPolicyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PrivacyPolicyCtrl.awesomeThings.length).toBe(3);
  });
});
