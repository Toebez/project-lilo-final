(function(){if (!process.env.DEBUG) {

  var sp = SerialPort.SerialPort("/dev/ttyACM0", { 
    baudrate: 9600 
  });

  var bind = function bind(func) {
    return Meteor.bindEnvironment(
      func,
      function () { 
        console.log('Failed to bind environment'); 
      }
    )
  }

  Meteor.methods({
    executeCommand: function(command) {
      sp.write(command);
    }
  })

  Meteor.startup(function () {
    var insertFact = function(data) {
      Facts.insert({
        date_created:  new Date().getTime(),
        text: data 
      });
    }

    Facts.remove({});
    sp.on("open", bind(function() {
      sp.on('data', bind(insertFact));
    }));
  });
  
}

})();
