Template.board.helpers({
	randomImages: function() {
		var numImages = 20;
		var allImages = Images.find().fetch();
		var numArray = [];
		var finalImages = [];
		for (var i = 0; i < numImages; i++) {
			var loc = Math.floor(Math.random() * allImages.length);
			var temp = allImages[loc];
			finalImages[i] = temp;
			allImages.splice(loc,1);
 		}
		return finalImages;
	},
	tags: function() {
		return Tags.find().fetch();
	}
})

Template.board.created = function() {
	Session.set('selectedTag', 0);
}

