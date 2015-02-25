if (Images.find().count() === 0) {
    for (var i = 1; i < 33; i++) {
	    Images.insert({
		    imageURL: 'im' + i + '.jpg'
	    });
	}
}
    