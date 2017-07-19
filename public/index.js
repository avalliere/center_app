var socket = io();
socket.on('connect', function(data){
  console.log('socket connected')
  socket.emit('ready')
});

socket.on('signal', function(signal){
  console.log('got the signal', signal);
  // Not working. Supposed to be inserting data in dom with data from #stream
  document.getElementById('stream').innerHTML = signal;
});
