/**
 * ut project services
 */

var services = angular.module('utApp.services',['ngResource']);

services.factory('getUtPanelDetails',['$http','$q',function($http,$q){
	return function(){
		var utPanels = [
		                   {
		                	   'type':'Firewall',	
		                	   'id':'432460',
		                	   'status':'accepted',
		                	   'collapse':false,
		                	   'data':{}
		                   },
		                   {
		                	   'type':'Firewall',	
		                	   'id':'432461',
		                	   'status':'rejected',
		                	   'collapse':true,
		                	   'data':{}
		                   },
		                   
		                   ]
		var delay = $q.defer();
		delay.resolve(utPanels);
		return delay.promise;
	};
}]);