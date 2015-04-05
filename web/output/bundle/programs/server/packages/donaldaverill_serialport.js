(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var SerialPort;

(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/donaldaverill:serialport/donaldaverill:serialport.js     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
SerialPort = Npm.require('serialport');                              // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['donaldaverill:serialport'] = {
  SerialPort: SerialPort
};

})();

//# sourceMappingURL=donaldaverill_serialport.js.map
