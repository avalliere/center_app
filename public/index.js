var socket = io();
socket.on('connect', function(data){
  console.log('socket connected')
  socket.emit('ready')
});

socket.on('signal', function(signal){
  console.log('got the signal', signal);
  pulse = signal;
  // Inserting data in dom with data from #stream
  // document.getElementById('stream').innerHTML = signal;


});

var pulse = []

// socket.on('IBI', function(ibi){
//   console.log('got IBI', ibi);
//   interval = ibi;
//   console.log(interval);
//
// });
//
// var interval = []
