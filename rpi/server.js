var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyACM0", {
  baudrate: 9600
});

serialPort.on("open", function () {
  console.log('open');
  serialPort.write("s\n", function(err, results) {
    console.log('err ' + err);
    console.log('results ' + results);
  });
});