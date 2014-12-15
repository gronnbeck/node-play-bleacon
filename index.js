var Bleacon = require('bleacon');

var uuid = 'B9407F30F5F8466EAFF925556B57FE6D';
var major = 13337; // 0 - 65535
var minor = 0; // 0 - 65535
var measuredPower = -59; // -128 - 127 (measured RSSI at 1 meter)
var max_length = 10;

var rolling = [];
function push(val) {
    if (rolling.length == max_length) {
      rolling.pop()
    }
    rolling.push(val)
}

Bleacon.on('discover', function(bcon) {
  var lol = {
    rssi: bcon.rssi,
    measuredPower: bcon.measuredPower,
    loss: bcon.rssi > bcon.measuredPower ?
      0 :
      Math.sqrt(Math.abs(bcon.measuredPower - bcon.rssi)),
    loss_avg: rolling.reduce(function(sum, current) {
      return sum + current;
    }, 0) / max_length
  }

  console.log(lol);

  push(lol.loss);

});

Bleacon.startScanning(uuid.toLowerCase(), major);
