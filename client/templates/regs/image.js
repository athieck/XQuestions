Template.image.helpers({
	bColor: function() {
		var isRecentlyUpdated = Session.get('recentlySubmitted');
		var imageId = this._id;

		if (isRecentlyUpdated === true && Template.instance().isSelected.get() === true) {
			Template.instance().bColor.set("#ccc");
			Template.instance().isSelected.set(false);
		}
		if (Session.get('areRoundsOver') === 1 && Session.get('finalImageSelected') != imageId && Template.instance().isSelected.get() === true) {
			Template.instance().bColor.set("#ccc");
			Template.instance().isSelected.set(false);
		}
		return Template.instance().bColor.get();
	}
});

Template.image.events({
	'click': function(event, template) {
		event.preventDefault();

		//console.log(template.data._id);
		if (template.isSelected.get() === false) {
			
			template.isSelected.set(true);
			addSelectedImage(template.data._id);
			if (Session.get('areRoundsOver') === 1) {
				Session.set('finalImageSelected', template.data._id);
				template.bColor.set("#10db0e");
			} else {
				template.bColor.set("#fa3736");
			}
		}
		else {
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