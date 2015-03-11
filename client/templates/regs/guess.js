Template.guess.helpers({
	status: function() {
		return "Success!";
	},
	recentlySubmitted: function() {
		return Session.get('recentlySubmitted');
	}
});

Template.guess.events({
	'click .btn': function(event, template) {
		//The big moment! decide and remove all the images!
		Session.set('recentlySubmitted', true);
		Meteor.setTimeout(resetGuessButton, 700);
	}
});

resetGuessButton = function() {
	//console.log("resetting");
	Session.set('recentlySubmitted', false);
}

Template.guess.created = function() {
	Session.set('recentlySubmitted', false);

}

Template.restart.helpers({
	isEnd: function() {
		if (Session.get('isEnd') === 1) {
			return true;
		}
		return false;
	}
});

Template.restart.events({
	'click .btn': function(event, template) {
		window.location.href = "localhost:3000/"
	}
});
