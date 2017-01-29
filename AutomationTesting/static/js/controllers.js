/**
 * Angular controllers file
 */

var utApp = angular.module("utApp",["ngAnimate","utApp.directives","utApp.services","utApp.filters","utApp.templates"]);
angular.module('utApp.templates', ["utPanel.html"]);

utApp.controller("utAppCtlr",['$scope','getUtPanelDetails','$window', function($scope, getUtPanelDetails,$window){
	var utPanelDetailsPromise = getUtPanelDetails();
	utPanelDetailsPromise.then(function(result){
		$scope.utPanels = result;
	},function(reason){
		console.log('unable to ut panel details');
	});
	$scope.config = utConfig.utPanleConfig;
	
	$scope.triggerModal = function(title, body){
		$scope.modal = $('#utModal');
		$scope.modal.show();
		$scope.modalTitle = title;
		$scope.modalBody = body;
	}
	
	$scope.modalClose = function(){
		$scope.modal.hide();
	}
	
	$window.onclick = function(event) {
	    if (event.target == ($scope.modal)[0]) {
	    	$scope.modal.hide();
	    }
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


