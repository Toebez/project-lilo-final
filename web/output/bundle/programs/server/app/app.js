(function(){Facts = new Mongo.Collection("facts");

if (Meteor.isClient) {
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
}

if (Meteor.isServer) {
	var bind = function bind(func) { return Meteor.bindEnvironment(func, function () { console.log('Failed to bind environment'); })}
  var SerialPort = Meteor.npmRequire('serialport').SerialPort;
  var sp = new SerialPort("/dev/ttyACM0", { baudrate: 9600 });

  Meteor.methods({
    executeCommand: function(command) {
      sp.write(command);
    }
  })

  Meteor.startup(function () {
    var insertFact = function(data) {
      Facts.insert({
        date_created: new Date().getTime(),
        text: String.fromCharCode.apply(null, data)
      });
    }

    Facts.remove({});
    sp.on("open", bind(function() {
      sp.on('data', bind(insertFact));
    }));
  });	
}


})();
