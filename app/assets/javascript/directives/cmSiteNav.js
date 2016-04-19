angular.module("CashierMax").directive('cmSiteNav', function(){
	return {
		replace: true,
		restrict: "E",
		templateUrl: "assets/templates/directives/cmSiteNav.html"	
	};
});