Router.configure({
	layoutTemplate: 'layout',
	//waitOn: function() { return Meteor.subscribe('images'); }
});

Router.route('/', {name: 'board'});
Router.route('/dataviz', {name:'dataviz'});
Router.route('/goldstandard', {name:'goldstandard'});