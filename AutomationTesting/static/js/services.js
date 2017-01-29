/**
 * ut project services
 */

var services = angular.module('utApp.services',['ngResource']);

services.factory('getUtPanelDetails',['$http','$q',function($http,$q){
	return function(){
		var utPanels = utModel.utPanleData;
		var delay = $q.defer();
		delay.resolve(utPanels);
		return delay.promise;
	};
}]);