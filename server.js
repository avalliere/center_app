// Express
// =======
const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const server = app.listen(port, function () {
               console.log('Listening on port: ' + port);
             });

app.use(express.static('public'));

// This is how I will write routes:
// app.get('/', function (req, res) {
// })


//socket.io
// ========
var socket = require('socket.io');

// var io chains together server and socket.io modules:
var io = socket(server);

// This is how to set up a listener for socket.io:
io.sockets.on('connection', function(socket){
  console.log('new connection from:' + socket.id);
  socket.on('ready', function(){
    console.log('got ready signal from Front-End')
    connectSerial();
  });
});

// Pulse Functions
// ===============
function connectSerial() {
  var $ = require('jQuery');
  var SerialPort = require('serialport');
  var createInterface = require('readline').createInterface;
  var usbPort = '/dev/cu.usbmodemFA131';
  var port = new SerialPort(usbPort);
  var lineReader = createInterface({
    input: port
  });


//

  // var PulseSensor = require('pulsesensor');
  // var pulse = PulseSensor.use(usbPort);
  // pulse.on('ready', function (){
  //   pulseSensor.on('beat', function (time) {
  //     console.log(pulse.BPM);
  //   });
  // });
//
  var data = [];
  function evaluateRegularity(data) {
    // evaluate data and send back number that represents regularity
    return data;
  }

  lineReader.on('line', function (line) {
    // console.log(line);
    // console.log('req emit here...')

    //  printing the numbers to the html from the arduino (needs io or it is out of scope)
    // emit one number
    // ===============
    // io.sockets.emit('signal', line);

    // emit array of numbers
    // =====================
    data.push(line);
    // console.log(data);
    if (data.length >= 10) {
      var regularity = evaluateRegularity(data);
      io.sockets.emit('signal', regularity);
      data = [];
    }
  });

  port.write('ROBOT PLEASE RESPOND\n');
}
