/**
 * Define all the models configurations here
 */

+function(root){
	
	//ut panel model data
	root.utModel = {};
	root.utModel['utPanleData'] = [
	     		                   {
	    		                	   'type':'Build',	
	    		                	   'id':'Tenrox-R1_1235',
	    		                	   'owner':'',
	    		                	   'state':'pending',
	    		                	   'collapse':true,
	    		                	   'timestarted':'',
	    		                	   'metrics': {
	    		                		   'status': 'nodata',
	    		                		   'data':{
	    		                			   'test': {
	    		                				   'name': 'Test',
	    		                				   'score': 64,
	    		                				   'result': 'pass'
	    		                			   },
	    		                			   'maintainability': {
	    		                				   'name': 'Maintainability',
	    		                				   'score': 53,
	    		                				   'result': 'pass'
	    		                			   },
	    		                			   'security': {
	    		                				   'name': 'Security',
	    		                				   'score': 64,
	    		                				   'result': 'progress'
	    		                			   },
	    		                			   'workmainship': {
	    		                				   'name': 'Workmanship',
	    		                				   'score': 72,
	    		                				   'result': 'progress'
	    		                			   }
	    		                		   }
	    		                	   },
	    		                	   'build': {
	    		                		   'status': 'nodata',
	    		                		   'data': {
	    		                			   'debug': {
	    		                				   'name': 'Debug',
	    		                			   },
	    		                			   'release': {
	    		                				   'name': 'Release'
	    		                			   },
	    		                			   'date': {
	    		                				   'date': '4/17/2014',
	    		                				   'time': '10:46am'
	    		                			   }
	    		                		   }
	    		                	   },
	    		                	   'unit_test': {
	    		                		   'status': 'nodata',
	    		                		   'data': {
	    		                			   'pie': {
	    		                				   'data': [300, 60],
    		                			           'labels': ["142", "10"],
    		                			           'colors': ["#FFDAB9", "#E6E6FA"]
		                			   			},
	    		                			    'codecovered': {
	    		                			    	'name': 'Code covered',
	    		                			    	'values': { 
	    		                			    		'result': "76%"
	    		                			    	},
	    		                			    	'result': 'pass'
	    		                			    },
	    		                			    'testspassed': {
	    		                			    	'name': 'tests passed',
	    		                			    	'result': '73%'
	    		                			    }
	    		                		   }
	    		                	   },
	    		                	   'functional_test': {
	    		                		   'status': 'nodata',
	    		                		   'data': {
	    		                			   'pie': {
	    		                				   'data': [240, 120],
    		                			           'labels': ["4321", "2145"],
    		                			           'colors': ["#FFDAB9", "#E6E6FA"]
		                			   			},
	    		                			    'codecovered': {
	    		                			    	'name': 'Code covered',
	    		                			    	'values': { 
	    		                			    		'result': "23%"
	    		                			    	},
	    		                			    	'result': 'fail'
	    		                			    },
	    		                			    'testspassed': {
	    		                			    	'name': 'tests passed',
	    		                			    	'result': '68%'
	    		                			    }
	    		                		   }
	    		                	   },
	    		                	   'results': {
	    		                		   'data': {
	    		                			   'result': 'progress',
	    		                			   'status': 'Pending',
	    		                			   'button': 'Deploy',
	    		                			   'message': '',
	    		                			   'options': ['Production','Stage']   
	    		                		   }
	    		                	   }
	    		                   },
	    		                   {
	    		                	   'type':'Firewall',	
	    		                	   'id':'432462',
	    		                	   'owner':'jtuck',
	    		                	   'state':'running',
	    		                	   'collapse':true,
	    		                	   'timestarted':'4/18/2014 12:12pm',
	    		                	   'metrics': {
	    		                		   'status': 'progress',
	    		                		   'data':{
	    		                			   'test': {
	    		                				   'name': 'Test',
	    		                				   'score': 64,
	    		                				   'result': 'pass'
	    		                			   },
	    		                			   'maintainability': {
	    		                				   'name': 'Maintainability',
	    		                				   'score': 53,
	    		                				   'result': 'pass'
	    		                			   },
	    		                			   'security': {
	    		                				   'name': 'Security',
	    		                				   'score': 64,
	    		                				   'result': 'progress'
	    		                			   },
	    		                			   'workmainship': {
	    		                				   'name': 'Workmanship',
	    		                				   'score': 72,
	    		                				   'result': 'progress'
	    		                			   }
	    		                		   }
	    		                	   },
	    		                	   'build': {
	    		                		   'status': 'nodata',
	    		                		   'data': {
	    		                			   'debug': {
	    		                				   'name': 'Debug',
	    		                			   },
	    		                			   'release': {
	    		                				   'name': 'Release'
	    		                			   },
	    		                			   'date': {
	    		                				   'date': '4/17/2014',
	    		                				   'time': '10:46am'
	    		                			   }
	    		                		   }
	    		                	   },
	    		                	   'unit_test': {
	    		                		   'status': 'nodata',
	    		                		   'data': {
	    		                			   'pie': {
	    		                				   'data': [300, 60],
    		                			           'labels': ["142", "10"],
    		                			           'colors': ["#FFDAB9", "#E6E6FA"]
		                			   			},
	    		                			    'codecovered': {
	    		                			    	'name': 'Code covered',
	    		                			    	'values': { 
	    		                			    		'result': "76%"
	    		                			    	},
	    		                			    	'result': 'pass'
	    		                			    },
	    		                			    'testspassed': {
	    		                			    	'name': 'tests passed',
	    		                			    	'result': '73%'
	    		                			    }
	    		                		   }
	    		                	   },
	    		                	   'functional_test': {
	    		                		   'status': 'nodata',
	    		                		   'data': {
	    		                			   'pie': {
	    		                				   'data': [240, 120],
    		                			           'labels': ["4321", "2145"],
    		                			           'colors': ["#FFDAB9", "#E6E6FA"]
		                			   			},
	    		                			    'codecovered': {
	    		                			    	'name': 'Code covered',
	    		                			    	'values': { 
	    		                			    		'result': "23%"
	    		                			    	},
	    		                			    	'result': 'fail'
	    		                			    },
	    		                			    'testspassed': {
	    		                			    	'name': 'tests passed',
	    		                			    	'result': '68%'
	    		                			    }
	    		                		   }
	    		                	   },
	    		                	   'results': {
	    		                		   'data': {
	    		                			   'result': 'progress',
	    		                			   'status': 'Pending',
	    		                			   'button': 'Deploy',
	    		                			   'message': '',
	    		                			   'options': ['Production','Stage']   
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
	    		                			   'test': {
	    		                				   'name': 'Test',
	    		                				   'score': 64,
	    		                				   'result': 'pass'
	    		                			   },
	    		                			   'maintainability': {
	    		                				   'name': 'Maintainability',
	    		                				   'score': 53,
	    		                				   'result': 'fail'
	    		                			   },
	    		                			   'security': {
	    		                				   'name': 'Security',
	    		                				   'score': 64,
	    		                				   'result': 'progress'
	    		                			   },
	    		                			   'workmainship': {
	    		                				   'name': 'Workmanship',
	    		                				   'score': 72,
	    		                				   'result': 'progress'
	    		                			   }
	    		                		   }
	    		                	   },
	    		                	   'build': {
	    		                		   'status': 'pass',
	    		                		   'data': {
	    		                			   'debug': {
	    		                				   'name': 'Debug',
	    		                			   },
	    		                			   'release': {
	    		                				   'name': 'Release'
	    		                			   },
	    		                			   'date': {
	    		                				   'date': '4/17/2014',
	    		                				   'time': '10:46am'
	    		                			   }
	    		                		   }
	    		                	   },
	    		                	   'unit_test': {
	    		                		   'status': 'pass',
	    		                		   'data': {
	    		                			   'pie': {
	    		                				   'data': [300, 60],
    		                			           'labels': ["142", "10"],
    		                			           'colors': ["#FFDAB9", "#E6E6FA"]
		                			   			},
	    		                			    'codecovered': {
	    		                			    	'name': 'Code covered',
	    		                			    	'values': { 
	    		                			    		'result': "76%"
	    		                			    	},
	    		                			    	'result': 'pass'
	    		                			    },
	    		                			    'testspassed': {
	    		                			    	'name': 'tests passed',
	    		                			    	'result': '73%'
	    		                			    }
	    		                		   }
	    		                	   },
	    		                	   'functional_test': {
	    		                		   'status': 'pass',
	    		                		   'data': {
	    		                			   'pie': {
	    		                				   'data': [240, 120],
    		                			           'labels': ["4321", "2145"],
    		                			           'colors': ["#FFDAB9", "#E6E6FA"]
		                			   			},
	    		                			    'codecovered': {
	    		                			    	'name': 'Code covered',
	    		                			    	'values': { 
	    		                			    		'result': "23%"
	    		                			    	},
	    		                			    	'result': 'fail'
	    		                			    },
	    		                			    'testspassed': {
	    		                			    	'name': 'tests passed',
	    		                			    	'result': '68%'
	    		                			    }
	    		                		   }
	    		                	   },
	    		                	   'results': {
	    		                		   'data': {
	    		                			   'result': 'fail',
	    		                			   'status': 'Metrics Reduction',
	    		                			   'button': 'Find Issues',
	    		                			   'message': 'Change Rejected' 
	    		                		   }
	    		                	   }
	    		                   },
	    		                   {
	    		                	   'type':'Build',	
	    		                	   'id':'Tenrox-R1_1234',
	    		                	   'owner':'',
	    		                	   'state':'complete',
	    		                	   'collapse':false,
	    		                	   'timestarted':'4/17/2014 9:42am',
	    		                	   'metrics': {
	    		                		   'status': 'pass',
	    		                		   'data':{
	    		                			   'test': {
	    		                				   'name': 'Test',
	    		                				   'score': 64,
	    		                				   'result': 'pass'
	    		                			   },
	    		                			   'maintainability': {
	    		                				   'name': 'Maintainability',
	    		                				   'score': 53,
	    		                				   'result': 'pass'
	    		                			   },
	    		                			   'security': {
	    		                				   'name': 'Security',
	    		                				   'score': 64,
	    		                				   'result': 'progress'
	    		                			   },
	    		                			   'workmainship': {
	    		                				   'name': 'Workmanship',
	    		                				   'score': 72,
	    		                				   'result': 'progress'
	    		                			   }
	    		                		   }
	    		                	   },
	    		                	   'build': {
	    		                		   'status': 'pass',
	    		                		   'data': {
	    		                			   'debug': {
	    		                				   'name': 'Debug',
	    		                			   },
	    		                			   'release': {
	    		                				   'name': 'Release'
	    		                			   },
	    		                			   'date': {
	    		                				   'date': '4/17/2014',
	    		                				   'time': '10:46am'
	    		                			   }
	    		                		   }
	    		                	   },
	    		                	   'unit_test': {
	    		                		   'status': 'pass',
	    		                		   'data': {
	    		                			   'pie': {
	    		                			           'data': [300, 60],
	    		                			           'labels': ["142", "10"],
	    		                			           'colors': ["#FFDAB9", "#E6E6FA"]
	    		                			   		},
	    		                			    'codecovered': {
	    		                			    	'name': 'Code covered',
	    		                			    	'values': { 
	    		                			    		'result': "76%"
	    		                			    	},
	    		                			    	'result': 'pass'
	    		                			    },
	    		                			    'testspassed': {
	    		                			    	'name': 'tests passed',
	    		                			    	'result': '73%'
	    		                			    }
	    		                		   }
	    		                	   },
	    		                	   'functional_test': {
	    		                		   'status': 'pass',
	    		                		   'data': {
	    		                			   'pie': {
    		                			           'data': [240, 120],
    		                			           'labels': ["4321", "2145"],
    		                			           'colors': ["#FFDAB9", "#E6E6FA"]
		                			   			},
	    		                			    'codecovered': {
	    		                			    	'name': 'Code covered',
	    		                			    	'values': { 
	    		                			    		'result': "23%"
	    		                			    	},
	    		                			    	'result': 'fail'
	    		                			    },
	    		                			    'testspassed': {
	    		                			    	'name': 'tests passed',
	    		                			    	'result': '68%'
	    		                			    }
	    		                		   }
	    		                	   },
	    		                	   'results': {
	    		                		   'data': {
	    		                			   'result': 'pass',
	    		                			   'status': 'Complete',
	    		                			   'button': 'Deploy',
	    		                			   'message': '',
	    		                			   'options': ['Production','Stage']   
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
	    		                			   'test': {
	    		                				   'name': 'Test',
	    		                				   'score': 64,
	    		                				   'result': 'pass'
	    		                			   },
	    		                			   'maintainability': {
	    		                				   'name': 'Maintainability',
	    		                				   'score': 53,
	    		                				   'result': 'fail'
	    		                			   },
	    		                			   'security': {
	    		                				   'name': 'Security',
	    		                				   'score': 64,
	    		                				   'result': 'progress'
	    		                			   },
	    		                			   'workmainship': {
	    		                				   'name': 'Workmanship',
	    		                				   'score': 72,
	    		                				   'result': 'progress'
	    		                			   }
	    		                		   }
	    		                	   },
	    		                	   'build': {
	    		                		   'status': 'nodata',
	    		                		   'data': {
	    		                			   'debug': {
	    		                				   'name': 'Debug',
	    		                			   },
	    		                			   'release': {
	    		                				   'name': 'Release'
	    		                			   },
	    		                			   'date': {
	    		                				   'date': '4/17/2014',
	    		                				   'time': '10:46am'
	    		                			   }
	    		                		   }
	    		                	   },
	    		                	   'unit_test': {
	    		                		   'status': 'nodata',
	    		                		   'data': {
	    		                			   'pie': {
	    		                				   'data': [300, 60],
    		                			           'labels': ["142", "10"],
    		                			           'colors': ["#FFDAB9", "#E6E6FA"]
		                			   			},
	    		                			    'codecovered': {
	    		                			    	'name': 'Code covered',
	    		                			    	'values': { 
	    		                			    		'result': "76%"
	    		                			    	},
	    		                			    	'result': 'pass'
	    		                			    },
	    		                			    'testspassed': {
	    		                			    	'name': 'tests passed',
	    		                			    	'result': '73%'
	    		                			    }
	    		                		   }
	    		                	   },
	    		                	   'functional_test': {
	    		                		   'status': 'nodata',
	    		                		   'data': {
	    		                			   'pie': {
	    		                				   'data': [240, 120],
    		                			           'labels': ["4321", "2145"],
    		                			           'colors': ["#FFDAB9", "#E6E6FA"]
		                			   			},
	    		                			    'codecovered': {
	    		                			    	'name': 'Code covered',
	    		                			    	'values': { 
	    		                			    		'result': "23%"
	    		                			    	},
	    		                			    	'result': 'fail'
	    		                			    },
	    		                			    'testspassed': {
	    		                			    	'name': 'tests passed',
	    		                			    	'result': '68%'
	    		                			    }
	    		                		   }
	    		                	   },
	    		                	   'results': {
	    		                		   'data': {
	    		                			   'result': 'fail',
	    		                			   'status': 'Metrics Reduction',
	    		                			   'button': 'Find Issues',
	    		                			   'message': 'Change Rejected' 
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
	    		                			   'test': {
	    		                				   'name': 'Test',
	    		                				   'score': 64,
	    		                				   'result': 'pass'
	    		                			   },
	    		                			   'maintainability': {
	    		                				   'name': 'Maintainability',
	    		                				   'score': 53,
	    		                				   'result': 'pass'
	    		                			   },
	    		                			   'security': {
	    		                				   'name': 'Security',
	    		                				   'score': 64,
	    		                				   'result': 'progress'
	    		                			   },
	    		                			   'workmainship': {
	    		                				   'name': 'Workmanship',
	    		                				   'score': 72,
	    		                				   'result': 'progress'
	    		                			   }
	    		                		   }
	    		                	   },
	    		                	   'build': {
	    		                		   'status': 'pass',
	    		                		   'data': {
	    		                			   'debug': {
	    		                				   'name': 'Debug',
	    		                			   },
	    		                			   'release': {
	    		                				   'name': 'Release'
	    		                			   },
	    		                			   'date': {
	    		                				   'date': '4/17/2014',
	    		                				   'time': '10:46am'
	    		                			   }
	    		                		   }
	    		                	   },
	    		                	   'unit_test': {
	    		                		   'status': 'pass',
	    		                		   'data': {
	    		                			   'pie': {
	    		                				   'data': [300, 60],
    		                			           'labels': ["142", "10"],
    		                			           'colors': ["#FFDAB9", "#E6E6FA"]
		                			   			},
	    		                			    'codecovered': {
	    		                			    	'name': 'Code covered',
	    		                			    	'values': { 
	    		                			    		'result': "76%"
	    		                			    	},
	    		                			    	'result': 'pass'
	    		                			    },
	    		                			    'testspassed': {
	    		                			    	'name': 'tests passed',
	    		                			    	'result': '73%'
	    		                			    }
	    		                		   }
	    		                	   },
	    		                	   'functional_test': {
	    		                		   'status': 'pass',
	    		                		   'data': {
	    		                			   'pie': {
	    		                				   'data': [240, 120],
    		                			           'labels': ["4321", "2145"],
    		                			           'colors': ["#FFDAB9", "#E6E6FA"]
		                			   			},
	    		                			    'codecovered': {
	    		                			    	'name': 'Code covered',
	    		                			    	'values': { 
	    		                			    		'result': "23%"
	    		                			    	},
	    		                			    	'result': 'fail'
	    		                			    },
	    		                			    'testspassed': {
	    		                			    	'name': 'tests passed',
	    		                			    	'result': '68%'
	    		                			    }
	    		                		   }
	    		                	   },
	    		                	   'results': {
	    		                		   'data': {
	    		                			   'result': 'progress',
	    		                			   'status': 'Auto-Merged',
	    		                			   'button': '&#9740;&nbsp;&nbsp;Merged Build',
	    		                			   'message': 'Change Accepted'
	    		                		   }
	    		                	   }
	    		                   }
	    		                   
	    		                   ];
}(window);