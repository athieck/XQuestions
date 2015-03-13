Template.image2.helpers({
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

Template.image2.events({
    'click': function(event, template) {
        event.preventDefault();

        alert(Tags.find({tagTopic: "cat"}));

    }
});

Template.image2.created = function() {
    this.bColor = new ReactiveVar("#ccc");
    this.isSelected = new ReactiveVar(false);
}