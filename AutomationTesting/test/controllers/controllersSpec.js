/**
 * Testing controllers
 */

describe('example test', function() {
	it('should be true', function() {
		expect('foo').toBe('foo');
		expect('kumar').toBe('kumar');
	});
});


describe('PasswordController', function() {
  beforeEach(module('utApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('PasswordController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
      expect($scope.strength).toEqual('strong');
    });
  });
});

