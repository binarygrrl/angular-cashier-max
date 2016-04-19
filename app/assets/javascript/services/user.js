angular.module('CashierMax').factory('User', function($resource){
	return $resource('/users/:id');
});