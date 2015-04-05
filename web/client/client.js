Template.controls.events({
  'click button': function (event, template) {
     Meteor.call('executeCommand', event.currentTarget.id);
  }
});

Template.facts.helpers({
  facts: function() {
    return Facts.find({}, {sort: {date_created: -1}});
  }
});