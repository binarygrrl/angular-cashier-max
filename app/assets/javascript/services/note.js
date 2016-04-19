angular.module('NoteWrangler').factory('Note', function($resource){
	return $resource('/notes/:id', {id: "@id"}, {
		//MUST ADD FOR ALL USE OF $RESOURCE
		update: {
			method: "PUT"
		}
	});
});