Template.board.helpers({
	randomImages: function() {
		var numImages = 20;
		var allImages = Images.find().fetch();
		var numArray = [];
		var finalImages = [];
		for (var i = 0; i < numImages; i++) {
			var loc = Math.floor(Math.random() * allImages.length);
			finalImages[i] = allImages[loc];
			allImages.splice(loc,1);
 		}
		return finalImages;
	}
})