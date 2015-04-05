if (process.env.DEBUG) {

	Meteor.methods({
	  executeCommand: function(command) {
	    Facts.insert({ 
	      date_created:  new Date().getTime(),
	      text: command })
	  }
	})

	Meteor.startup(function () {
	  Facts.remove({});
	});

}
