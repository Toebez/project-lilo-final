if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
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
  });
}
