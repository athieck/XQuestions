Template.image.helpers({
	bColor: function() {
		var isRecentlyUpdated = Session.get('recentlySubmitted');
		if (isRecentlyUpdated === true && Template.instance().isSelected.get() === true) {
			Template.instance().bColor.set("#ccc");
			Template.instance().isSelected.set(false);
		} 
		return Template.instance().bColor.get();
	}
});

Template.image.events({
	'click': function(event, template) {
		event.preventDefault();

		console.log(template.data._id);
		if (template.isSelected.get() === false) {
			template.bColor.set("#fa3736");
			template.isSelected.set(true);
			addSelectedImage(template.data._id);
		} else {
			template.bColor.set("#ccc");
			template.isSelected.set(false);
			removeSelectedImage(template.data._id);
		}
	}
});

Template.image.created = function() {
	this.bColor = new ReactiveVar("#ccc");
	this.isSelected = new ReactiveVar(false);
}