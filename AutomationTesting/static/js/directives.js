/**
 * directives
 */
var directives = angular.module('utApp.directives', []);

directives.directive('aGreatEye', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
    };
});

directives.directive('utPanelSet',function(){
	return {
		restrict: 'EA',
	    transclude: true,
	    replace: true,
	    scope: {
	    	
	    },
	    template: '<div class="nav" ng-transclude></div>',
		controller: function($scope){
			this.panels = $scope.panels = [];
			this.addPanel = function(panel){
				$scope.panels.push(panel);
			}
		},
		link: function($scope,element,attrs){
		}
	}
});

directives.directive('utPanel',function(){
	return {
		restrict: 'EA',
		replace: true,
		require: '^utPanelSet',
		template: '<div class="panel">'+
					'<div class="panel-header" ng-click="toggleCollapse()">'+
						'Header'+
					'</div>'+
					'<div class="panel-body panelSlideUp" ng-hide="collapse">'+
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'+
					'</div>'+
				  '</div>',
		scope: {
			type: '@',
			id: '@',
			data: '=',
			collapse: '=collapse'
		},
		link: function($scope,element,attrs,utPanelSetCtlr){
			$scope.toggleCollapse = function(){
				//collapse all other panels
				$.each(utPanelSetCtlr.panels,function(index,panel){
					if(!panel.collaspe){
						panel.collapse = true;
					}
				});
				$scope.collapse = !$scope.collapse;
			}
			utPanelSetCtlr.addPanel($scope);
		}
	}
});





