angular.module('CashierMax').factory('Category', function($resource){
	return $resource('/categories/:id');
});