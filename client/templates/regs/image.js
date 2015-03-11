Template.image.helpers({
	bColor: function() {
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
		} else {
			template.bColor.set("#ccc");
			template.isSelected.set(false);
		}
	}
});

Template.image.created = function() {
	this.bColor = new ReactiveVar("#ccc");
	this.isSelected = new ReactiveVar(false);
}