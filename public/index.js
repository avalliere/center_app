var socket = io();
socket.on('connect', function(data){
  console.log('socket connected')
  socket.emit('ready')
});

socket.on('signal', function(pulseObj){
  console.log('got the signal', pulseObj);

  pulse = pulseObj;
});

var pulse = {};
