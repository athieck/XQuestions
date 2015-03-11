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
		Meteor.setTimeout(resetGuessButton, 1000);
	}
});

resetGuessButton = function() {
	console.log("resetting");
	Session.set('recentlySubmitted', false);
}

Template.guess.created = function() {
	Session.set('recentlySubmitted', false);

}