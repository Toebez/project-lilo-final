  Meteor.methods({
    executeCommand: bind(function(command) {
      Facts.insert({ 
        date_created:  new Date().getTime(),
        text: getCmd(command) })
    })
  })

  Meteor.startup(function () {
    Facts.remove({});
  });