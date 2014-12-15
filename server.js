var Bleacon = require('bleacon');

var uuid = 'B9407F30F5F8466EAFF925556B57FE6D';
var major = 6969; // 0 - 65535
var minor = 0; // 0 - 65535
var measuredPower = -59; // -128 - 127 (measured RSSI at 1 meter)

Bleacon.startAdvertising(uuid, major, minor, measuredPower);
