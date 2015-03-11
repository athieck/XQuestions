Template.tag.helpers({
	bColor: function() {
		var selectedTag = Session.get('selectedTag');
		var tagId = this._id;
		if (selectedTag != tagId && Template.instance().isSelected.get() === true) {
			Template.instance().bColor.set("#fff");
			Template.instance().isSelected.set(false);
		}
		return Template.instance().bColor.get();
	}
});

Template.tag.events({
	'click': function(event, template) {
		if (template.isSelected.get() === false) {
			template.bColor.set("#27ace3");
			template.isSelected.set(true);
			Session.set('selectedTag', template.data._id);
			

		} else {
			template.bColor.set("#fff");
			template.isSelected.set(false);
			Session.set('selectedTag', 0);

		}
	}
});

Template.tag.created = function() {
	this.bColor = new ReactiveVar("#fff");
	this.isSelected = new ReactiveVar(false);
}