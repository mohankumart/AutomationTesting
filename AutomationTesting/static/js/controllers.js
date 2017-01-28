/**
 * Angular controllers file
 */

var utApp = angular.module("utApp",["ngAnimate"]);

utApp.controller("utAppCtlr",['$scope', function($scope){
	$scope.collapse = false;
	
	$scope.testing = "Mohan";
	
	$scope.toggleCollapse = function(){
		$scope.collapse = !$scope.collapse;
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


