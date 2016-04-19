angular.module('CashierMax').controller('NotesEditController', function(Note, User, Category, $scope, $routeParams, $location){
	$scope.note = Note.get({id: $routeParams.id});
	$scope.isSubmitting = false;
	$scope.categories = Category.query();
	$scope.users = User.query();
	console.log($scope.categories);
	$scope.saveNote = function(note){
		//disable the button
		$scope.isSubmitting = true;
		//renable the button after the edit has been submitted
		note.$update().finally(function(){
			$scope.isSubmitting = false;
			//This takes the page back to show the note editted
			$location.path("/notes/" + note.id);
		});
	}
});