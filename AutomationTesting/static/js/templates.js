/**
 * ut template files
 */
var templates = angular.module("utApp.templates", []);

templates.run(["$templateCache", function($templateCache) {
  $templateCache.put("utPanel.html",
		  '<div class="ut-panel-body {{data.state}}">'+
			'<div class="ut-panel-row clearfix">'+
				'<div class="ut-panel-cell" ng-style="setPanelCellStyles(col, $index)" ng-repeat="col in config" ng-switch="col.map">'+
					'<div class="clearfix ut-panel-anchor" ng-switch-when="id">'+
						'<div class="left"><img ng-if="data.type == \'Build\'" ng-src="../static/images/build/{{data.state}}.png"/><img ng-if="data.type != \'Build\'" ng-src="../static/images/firewall/{{data.state}}.png"/></div>'+
						'<div class="left">'+
							'<a href ng-class="{\'expand\': !data.collapse,\'collapse\': data.collapse}" ng-click="toggleCollapse()">{{data.id}}</a>'+
						'</div>'+
					'</div>'+
					'<div class="ut-panel-normal" ng-switch-when="owner">{{data.owner}}</div>'+
					'<div class="ut-panel-normal" ng-switch-when="timestarted">{{data.timestarted}}</div>'+
					'<div class="ut-panel-normal" ng-switch-when="state">{{data.state|capital}}</div>'+
					'<div class="ut-panel-normal" ng-switch-when="metrics">{{data.metrics.status}}</div>'+
					'<div class="ut-panel-normal" ng-switch-when="build">{{data.build.status}}</div>'+
					'<div class="ut-panel-normal" ng-switch-when="unit_test">{{data.unit_test.status}}</div>'+
					'<div class="ut-panel-normal" ng-switch-when="functional_test">{{data.functional_test.status}}</div>'+
					'<div class="ut-panel-normal" ng-switch-default>No Data</div>'+
				'</div>'+
			'</div>'+
			'<div class="ut-panel-expand-body clearfix" ng-hide="collapse">'+
				'<div class="metrics {{data.metrics.status}}">'+
					'<div class="ut-panel-expand-body-heading">Metrics</div>'+
					'<div class="clearfix">'+
						'<div class="ut-panel-expand-body-box test">'+
							'<div class="arrow"><img ng-src="../static/images/metrics/{{data.metrics.data.test.result}}.png" alt="{{data.metrics.data.test.score}}"/><div><span>{{data.metrics.data.test.score}}</span></div></div>'+
							'<div>{{data.metrics.data.test.name}}</div>'+
						'</div>'+
						'<div class="ut-panel-expand-body-box maintainability">'+
						'<div class="arrow"><img ng-src="../static/images/metrics/{{data.metrics.data.maintainability.result}}.png" alt="{{data.metrics.data.maintainability.score}}"/><div><span>{{data.metrics.data.maintainability.score}}</span></div></div>'+
							'<div>{{data.metrics.data.maintainability.name}}</div>'+
						'</div>'+	
					'</div>'+
					'<div class="clearfix">'+
						'<div class="ut-panel-expand-body-box security">'+
							'<div class="arrow"><img ng-src="../static/images/metrics/{{data.metrics.data.security.result}}.png" alt="{{data.metrics.data.security.score}}"/><div><span>{{data.metrics.data.security.score}}</span></div></div>'+
							'<div>{{data.metrics.data.security.name}}</div>'+
  						'</div>'+
						'<div class="ut-panel-expand-body-box workmainship">'+
							'<div class="arrow"><img ng-src="../static/images/metrics/{{data.metrics.data.workmainship.result}}.png" alt="{{data.metrics.data.workmainship.score}}"/><div><span>{{data.metrics.data.workmainship.score}}</span></div></div>'+
  							'<div>{{data.metrics.data.workmainship.name}}</div>'+
  						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="build {{data.build.status}}">'+
					'<div class="ut-panel-expand-body-heading">Build</div>'+
					'<div class="clearfix">'+
						'<div class="ut-panel-expand-body-box debug">'+
							'<div><img src="../static/images/build/computer.png"/></div>'+
							'<div>{{data.build.data.debug.name}}</div>'+
						'</div>'+
						'<div class="ut-panel-expand-body-box release">'+
							'<div><img src="../static/images/build/computer.png"/></div>'+
							'<div>{{data.build.data.release.name}}</div>'+
						'</div>'+	
					'</div>'+
					'<div class="ut-panel-expand-body-footer"><span>{{data.build.data.date.time}}</span><span>&nbsp;&#45;&nbsp;</span><span>{{data.build.data.date.date}}</span></div>'+
				'</div>'+
				'<div class="unit-test {{data.unit_test.status}}">'+
					'<div class="ut-panel-expand-body-heading">Unit Test</div>'+
					'<div class="clearfix">'+
						'<div class="ut-panel-expand-body-box pie">'+
							'<div>'+
								
							'</div>'+
						'</div>'+
						'<div class="ut-panel-expand-body-box testspassed">'+
							'<div>{{data.unit_test.data.testspassed.result}}</div>'+
							'<div>{{data.unit_test.data.testspassed.name}}</div>'+
						'</div>'+	
					'</div>'+
					'<div class="codecovered">'+
						'<div class="progress">'+
							'<div class="progress-bar" ng-style="{width: data.unit_test.data.codecovered.values.result}"></div>'+
						'</div>'+
						'<div>'+
							'<div><span class="{{data.unit_test.data.codecovered.result}}">{{data.unit_test.data.codecovered.values.result}}</span></div>'+
							'<div>{{data.unit_test.data.codecovered.name}}</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="functional-test {{data.functional_test.status}}">'+
					'<div class="ut-panel-expand-body-heading">Functional Test</div>'+
					'<div class="clearfix">'+
						'<div class="ut-panel-expand-body-box pie">'+
							'<div>'+
								
							'</div>'+
						'</div>'+
						'<div class="ut-panel-expand-body-box testspassed">'+
							'<div>{{data.functional_test.data.testspassed.result}}</div>'+
							'<div>{{data.functional_test.data.testspassed.name}}</div>'+
						'</div>'+	
					'</div>'+
					'<div class="codecovered">'+
						'<div class="progress">'+
							'<div class="progress-bar" ng-style="{width: data.functional_test.data.codecovered.values.result}"></div>'+
						'</div>'+
						'<div>'+
							'<div><span class="{{data.functional_test.data.codecovered.result}}">{{data.functional_test.data.codecovered.values.result}}</span></div>'+
							'<div>{{data.functional_test.data.codecovered.name}}</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="results">'+
					'<div class="title center">Result:</div>'+
					'<div class="message center {{data.results.data.result}}">{{data.results.data.message}}</div>'+
					'<div class="status center {{data.results.data.result}}">{{data.results.data.status}}</div>'+
					'<div class="clearfix">'+
						'<div class="left"><button>{{data.results.data.button}}</button></div>'+
						'<div ng-if="data.type==\'Build\'" class="left"><span>to:</span></div>'+
						'<div ng-if="data.type==\'Build\'" class="left"><select><option ng-repeat="option in data.results.data.options">{{option}}</option></select></div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		  '</div>'
		  );
}]);

templates.run(["$templateCache", function($templateCache) {
  $templateCache.put("utPanelHeading.html",
		  '<div class="ut-panel-header">'+
			'<div class="ut-panel-row clearfix">'+
		  		'<div class="ut-panel-cell" ng-style="setHeadStyles(col, $index)" ng-repeat="col in config">'+
		  			'{{col.columnName}}'+
		  		'</div>'+
		  	'</div>'+
		  '</div>'
		  );
}]);
