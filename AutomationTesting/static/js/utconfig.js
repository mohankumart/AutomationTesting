/**
 * Define all the project configurations here
 */

+function(root){
	
	//ut panel column definitions
	root.utConfig = {};
	root.utConfig['utPanleConfig'] = [
	                      {'columnName':'Changelist / Build','map':'id','width': '15%'},
	                      {'columnName':'Owner','map':'owner','width': '15%'},
	                      {'columnName':'Time Started','map':'timestarted','width': '15%'},
	                      {'columnName':'State','map':'state','width': '10%'},
	                      {'columnName':'Metrics','map':'metrics','width': '10%'},
	                      {'columnName':'Build','map':'build','width': '10%'},
	                      {'columnName':'Unit Test','map':'unit_test','width': '10%'},
	                      {'columnName':'Functional Test','map':'functional_test','width': '15%'},
	                      ]; 
}(window);