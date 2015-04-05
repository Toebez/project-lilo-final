if (!process.env.DEBUG) {

  var SerialPort = Meteor.npmRequire('serialport').SerialPort;
  var sp = new SerialPort("/dev/ttyACM0", { baudrate: 9600 });

  Meteor.methods({
    executeCommand: function(command) {
      // sp.write(command);
    }
  })

  Meteor.startup(function () {
    var insertFact = function(data) {
      Facts.insert({
        date_created:  new Date().getTime(),
        text: data });
    }

    var logError = function () { 
      console.log('Failed to bind environment'); 
    }

    var openFunction = function() {
      sp.on('data', Meteor.bindEnvironment(
        insertFact,
        logError
      ));
    }

    Facts.remove({});
    sp.on("open", Meteor.bindEnvironment(
      openFunction,
      logError
      ));
  });

}
