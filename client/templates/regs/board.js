Template.board.helpers({
	randomImages: function() {
		var isRecentlyUpdated = Session.get('recentlySubmitted');
		if (imagesUsed[0] == undefined) {
			var numImages = 20;
			var allImages = Images.find().fetch();
			var numArray = [];
			console.log(imagesUsed.length);
			for (var i = 0; i < numImages; i++) {
				var loc = Math.floor(Math.random() * allImages.length);
				var temp = allImages[loc];
				imagesUsed[i] = temp;
				allImages.splice(loc,1);
	 		}
	 		var loc2 = Math.floor(Math.random() * imagesUsed.length);
	 		console.log(imagesUsed[loc2]);
	 		targetImage = imagesUsed[loc2];
 		} else {
 			if (isRecentlyUpdated === true) {
 				var isInSelected = isTargetInSelected();
 				if (isInSelected === false) {
		 			for (var i = 0; i < selectedImages.length; i++) {
		 				var imageIndex = findIdInUsedImages(selectedImages[i]);
		 				imagesUsed.splice(imageIndex, 1);
		 			}
	 			} else {
	 				for (var i = 0; i < imagesUsed.length; i++) {
	 					if (findIdInSelected(imagesUsed[i]._id) === false) {
	 						imagesUsed.splice(i, 1);
	 					}
	 				}
	 			}
	 			selectedImages.splice(0, selectedImages.length);
				Session.set('selectedTag', 0);
 			}
 		}
 		console.log(imagesUsed);
		return imagesUsed;
	},
	tags: function() {
		return Tags.find().fetch();
	}
})

targetImage = "";
imagesUsed = [];
findIdInSelected = function(imageId) {
	var isInSelected = false;
	for (var i = 0; i < selectedImages.length; i++) {
		if (selectedImages[i] === imageId) {
			isInSelected = true;
		}
	}
	return isInSelected;
}
findIdInUsedImages = function(imageId) {
	var index = 0;
	for (var i = 0; i < imagesUsed.length; i++) {
		if (imagesUsed[i]._id === imageId) {
			index = i;
			break;
		}
	}
	return index;
}

isTargetInSelected = function() {
	var isInSelected = false;
	for (var i = 0; i < selectedImages.length; i++) {
		if (selectedImages[i] === targetImage._id) {
			console.log("its in the highlighted!");
			isInSelected = true;
		}
	}
	return isInSelected;
}

selectedImages = [];
getSelectedImages = function() {
	return selectedImages;
}
addSelectedImage = function(imageId) {
	selectedImages.push(imageId);
}
removeSelectedImage = function(imageId) {
	for (var i = 0; i < selectedImages.length; i++) {
		if (selectedImages[i] === imageId) {
			selectedImages.splice(i,1);
			break;
		}
	}
}

clearSelectedImages = function() {
	selectedImages = [];
}

Template.board.created = function() {
	Session.set('selectedTag', 0);
}

