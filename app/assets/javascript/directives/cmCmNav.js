angular.module("CashierMax").directive('cmCmNav', function(){
	return {
		replace: true,
		restrict: "E",
		templateUrl: "assets/templates/directives/cmCmNav.html"	
	};
});