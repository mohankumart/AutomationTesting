/**
 * ut template files
 */
var templates = angular.module("utApp.templates", []);

templates.run(["$templateCache", function($templateCache) {
  $templateCache.put("utPanel.html",
		  '<div class="ut-panel-body {{data.state}}">'+
			'<div class="ut-panel-row clearfix">'+
				'<div class="ut-panel-cell" ng-style="setPanelCellStyles(col, $index)" ng-repeat="col in config" ng-switch="col.map">'+
					'<div ng-switch-when="id"><a href ng-class="{\'expand\': !data.collapse,\'collapse\': data.collapse}" ng-click="toggleCollapse()">{{data.id}}</a></div>'+
					'<div ng-switch-when="owner">{{data.owner}}</div>'+
					'<div ng-switch-when="timestarted">{{data.timestarted}}</div>'+
					'<div ng-switch-when="state">{{data.state|capital}}</div>'+
					'<div ng-switch-when="metrics">{{data.metrics.status}}</div>'+
					'<div ng-switch-when="build">{{data.build.status}}</div>'+
					'<div ng-switch-when="unit_test">{{data.unit_test.status}}</div>'+
					'<div ng-switch-when="functional_test">{{data.functional_test.status}}</div>'+
					'<ANY ng-switch-default>No Data</ANY>'+
				'</div>'+
			'</div>'+
			'<div class="ut-panel-expand-body clearfix" ng-hide="collapse">'+
				'<div class="metrics {{data.metrics.status}}">'+
					'<div class="ut-panel-expand-body-heading">Metrics</div>'+
					'<div class="clearfix">'+
						'<div class="ut-panel-expand-body-box">'+
							'<div class="arrow"><img src="../static/images/green-up.png" alt=""/><div><span>{{data.metrics.data.test.score}}</span></div></div>'+
							'<div>{{data.metrics.data.test.name}}</div>'+
						'</div>'+
						'<div class="ut-panel-expand-body-box">{{data.metrics.data.maintainability.name}}</div>'+
					'</div>'+
					'<div class="clearfix">'+
						'<div class="ut-panel-expand-body-box">{{data.metrics.data.security.name}}</div>'+
						'<div class="ut-panel-expand-body-box">{{data.metrics.data.workmainship.name}}</div>'+
					'</div>'+
				'</div>'+
				'<div class="build {{data.build.status}}">'+
				'</div>'+
				'<div class="unit-test {{data.unit_test.status}}">'+
				'</div>'+
				'<div class="functional-test {{data.functional_test.status}}">'+
				'</div>'+
				'<div class="results">'+
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
