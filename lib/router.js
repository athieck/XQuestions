Router.configure({
	layoutTemplate: 'layout',
	//waitOn: function() { return Meteor.subscribe('images'); }
});

Router.route('/', {name: 'board'});