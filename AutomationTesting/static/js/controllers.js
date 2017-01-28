/**
 * Angular controllers file
 */

var utApp = angular.module("utApp",["ngAnimate","utApp.directives","utApp.services"]);

utApp.controller("utAppCtlr",['$scope','getUtPanelDetails', function($scope, getUtPanelDetails){
	var utPanelDetailsPromise = getUtPanelDetails();
	utPanelDetailsPromise.then(function(result){
		$scope.utPanels = result;
	},function(reason){
		console.log('unable to ut panel details');
	});
	$scope.config = utConfig.utPanleConfig;
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


