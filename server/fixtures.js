if (Images.find().count() === 0) {
    for (var i = 1; i < 33; i++) {
	    Images.insert({
	    	isSelected: false,
		    imageURL: 'im' + i + '.jpg'
	    });
	}

	Tags.insert({tagTopic: "Cat"});
	Tags.insert({tagTopic: "Dog"});
	Tags.insert({tagTopic: "Rabbit"});
	Tags.insert({tagTopic: "Panda"});
	Tags.insert({tagTopic: "Tiger"});
	Tags.insert({tagTopic: "Lion"});
	Tags.insert({tagTopic: "Green Background"});
	Tags.insert({tagTopic: "White Background"});
	Tags.insert({tagTopic: "One Animal"});
	Tags.insert({tagTopic: "White Animal"});
	Tags.insert({tagTopic: "Tan Animal"});
	Tags.insert({tagTopic: "Grey Animal"});
	Tags.insert({tagTopic: "Black Animal"});
}
    