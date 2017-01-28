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
	  var $scope, controller;

	  beforeEach(function() {
		  $scope = {};
	      controller = $controller('PasswordController', { $scope: $scope });
	  });
	    
	  it('sets the strength to "strong" if the password length is >8 chars', function() {
		  $scope.password = 'longerthaneightchars';
		  $scope.grade();
		  expect($scope.strength).toEqual('strong');
	  });
	  
	  it('sets the strength to "weak" if the password length <3 chars', function() {
	      $scope.password = 'a';
	      $scope.grade();
	      expect($scope.strength).toEqual('weak');
	  });
  });
});


describe('length filter', function() {
  beforeEach(module('utApp'));	
  var $filter;

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('returns 0 when given null', function() {
    var length = $filter('length');
    expect(length(null)).toEqual(0);
  });

  it('returns the correct value when given a string of chars', function() {
    var length = $filter('length');
    expect(length('abc')).toEqual(3);
  });
});

describe('Unit testing great quotes', function() {
  var $compile,
      $rootScope;

  // Load the myApp module, which contains the directive
  beforeEach(module('utApp'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  
  it('Replaces the element with the appropriate content', function() {
    // Compile a piece of HTML containing the directive
    var compileLinkFn = $compile("<a-great-eye></a-great-eye>");
    var element = compileLinkFn($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
  });
  
});



