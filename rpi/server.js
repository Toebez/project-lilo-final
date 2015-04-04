var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

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