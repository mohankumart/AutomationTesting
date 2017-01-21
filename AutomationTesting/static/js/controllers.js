/**
 * Angular controllers file
 */

var utApp = angular.module("utApp",[]);

utApp.controller("utAppCtlr",['$scope', function($scope){
	
	$scope.addNumbers = function(x, y){
		
	}
}]);

utApp.controller('PasswordController', function PasswordController($scope) {
  $scope.password = '';
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
});


