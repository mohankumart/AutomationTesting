/**
 * ut project services
 */

var services = angular.module('utApp.services',['ngResource']);

services.factory('getUtPanelDetails',['$http','$q',function($http,$q){
	return function(){
		var utPanels = [
		                   {
		                	   'type':'Firewall',	
		                	   'id':'Tenrox-R1_1235',
		                	   'owner':'',
		                	   'state':'pending',
		                	   'collapse':false,
		                	   'timestarted':'',
		                	   'metrics': {
		                		   'status': 'nodata',
		                		   'data':{
		                			   
		                		   }
		                	   },
		                	   'build': {
		                		   'status': 'nodata',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'unit_test': {
		                		   'status': 'nodata',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'functional_test': {
		                		   'status': 'nodata',
		                		   'data': {
		                			   
		                		   }
		                	   }
		                   },
		                   {
		                	   'type':'Build',	
		                	   'id':'432462',
		                	   'owner':'jtuck',
		                	   'state':'running',
		                	   'collapse':true,
		                	   'timestarted':'4/18/2014 12:12pm',
		                	   'metrics': {
		                		   'status': 'progress',
		                		   'data':{
		                			   
		                		   }
		                	   },
		                	   'build': {
		                		   'status': 'nodata',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'unit_test': {
		                		   'status': 'nodata',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'functional_test': {
		                		   'status': 'nodata',
		                		   'data': {
		                			   
		                		   }
		                	   }
		                   },
		                   {
		                	   'type':'Firewall',	
		                	   'id':'432461',
		                	   'owner':'samy',
		                	   'state':'rejected',
		                	   'collapse':true,
		                	   'timestarted':'4/18/2014 10:53am',
		                	   'metrics': {
		                		   'status': 'fail',
		                		   'data':{
		                			   
		                		   }
		                	   },
		                	   'build': {
		                		   'status': 'pass',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'unit_test': {
		                		   'status': 'pass',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'functional_test': {
		                		   'status': 'pass',
		                		   'data': {
		                			   
		                		   }
		                	   }
		                   },
		                   {
		                	   'type':'Build',	
		                	   'id':'Tenrox-R1_1234',
		                	   'owner':'',
		                	   'state':'complete',
		                	   'collapse':true,
		                	   'timestarted':'4/17/2014 9:42am',
		                	   'metrics': {
		                		   'status': 'pass',
		                		   'data':{
		                			   
		                		   }
		                	   },
		                	   'build': {
		                		   'status': 'pass',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'unit_test': {
		                		   'status': 'pass',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'functional_test': {
		                		   'status': 'pass',
		                		   'data': {
		                			   
		                		   }
		                	   }
		                   },
		                   {
		                	   'type':'Firewall',	
		                	   'id':'432460',
		                	   'owner':'samy',
		                	   'state':'rejected',
		                	   'collapse':true,
		                	   'timestarted':'4/17/2014 7:51am',
		                	   'metrics': {
		                		   'status': 'fail',
		                		   'data':{
		                			   
		                		   }
		                	   },
		                	   'build': {
		                		   'status': 'nodata',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'unit_test': {
		                		   'status': 'nodata',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'functional_test': {
		                		   'status': 'nodata',
		                		   'data': {
		                			   
		                		   }
		                	   }
		                   },
		                   {
		                	   'type':'Firewall',	
		                	   'id':'432459',
		                	   'owner':'jtuck',
		                	   'state':'accepted',
		                	   'collapse':true,
		                	   'timestarted':'4/16/2014 6:43am',
		                	   'metrics': {
		                		   'status': 'pass',
		                		   'data':{
		                			   
		                		   }
		                	   },
		                	   'build': {
		                		   'status': 'pass',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'unit_test': {
		                		   'status': 'pass',
		                		   'data': {
		                			   
		                		   }
		                	   },
		                	   'functional_test': {
		                		   'status': 'pass',
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