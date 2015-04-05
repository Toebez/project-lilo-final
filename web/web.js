Facts = new Mongo.Collection("facts");

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
  var debug = process.env.DEBUG;

  Meteor.methods({
    executeCommand: function(command) {
      console.log( new Date().getTime());
      if (debug) {
        Facts.insert({ 
          date_created:  new Date().getTime(),
          text: command })
      } else {
      }
    }
  })

  Meteor.startup(function () {
    Facts.remove({});
    if (debug) {

    } else {
      var SerialPort = Meteor.npmRequire('serialport').SerialPort;
      var sp = new SerialPort("/dev/ttyACM0", {
        baudrate: 9600
      });

      sp.on("open", function () {
        sp.on('data', function(data) {
          console.log(data + ' ');
        });

        (function myLoop (i) {
          setTimeout(function () {
            sp.write('s');
            if (--i) myLoop(i);
          }, 3000)
        })(100);
      });
    }
  });
}
