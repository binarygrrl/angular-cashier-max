angular.module('CashierMax').controller('NotesIndexController', function(Note, $scope){
	//Query for all entries | Query === All
	$scope.notes = Note.query();
	$scope.search = {};
	//nwCategorySelect
});