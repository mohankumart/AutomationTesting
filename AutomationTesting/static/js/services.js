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
		                	   'owner':'jtuck',
		                	   'state':'accepted',
		                	   'collapse':true,
		                	   'timestarted':'4/18/2014 12:12pm',
		                	   'metrics': {
		                		   'status': 'nodata',
		                		   'data':{
		                			   
		                		   }
		                	   },
		                	   'build': {
		                		   'status': 'pass',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'unit_test': {
		                		   'status': 'nodata',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'functional_test': {
		                		   'status': 'fail',
		                		   'data': {
		                			   
		                		   }
		                	   }
		                   },
		                   {
		                	   'type':'Firewall',	
		                	   'id':'432460',
		                	   'owner':'jtuck',
		                	   'state':'accepted',
		                	   'collapse':false,
		                	   'timestarted':'4/18/2014 12:12pm',
		                	   'metrics': {
		                		   'status': 'nodata',
		                		   'data':{
		                			   
		                		   }
		                	   },
		                	   'build': {
		                		   'status': 'pass',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'unit_test': {
		                		   'status': 'nodata',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'functional_test': {
		                		   'status': 'fail',
		                		   'data': {
		                			   
		                		   }
		                	   }
		                   }
		                   
		                   ]
		var delay = $q.defer();
		delay.resolve(utPanels);
		return delay.promise;
	};
}]);