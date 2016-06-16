var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req,res){
	//res.send('Hello Node');
	res.sendFile(__dirname+'/index.html');
});

io.on('connection', function(socket){
	console.log('A user connected');
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
		console.log('message: '+ msg);
	});
	socket.on('disconnect', function(){
		console.log('User disconnected');
	});
});

http.listen(3000, function(){
	console.log('server running on *:3000');
});