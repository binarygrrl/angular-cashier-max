angular.module('CashierMax').controller('UsersIndexController', function(User, $scope){
	//Query for all entries | Query === All
	$scope.users = User.query();
	$scope.search = {};
});