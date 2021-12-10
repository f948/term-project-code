var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = process.env.PORT || 3000

app.get('/dsfgjhjfgjh', function(req, res){
   res.sendfile('CMN 300 Recommendation Report.pdf');
});

app.get('/page1.html', function(req, res){
   res.sendfile('CPS 530 Presentation Page 1 Presentation.pdf');
});

app.get('/page2.html', function(req, res){
   res.sendfile('page2.html');
});

app.get('/page3.html', function(req, res){
   res.sendfile('page3.html');
});


app.get('/page4.html', function(req, res){
   res.sendfile('page4.html');
});

app.get('/page5.html', function(req, res){
   res.sendfile('page5.html');
});


app.get('/page6.html', function(req, res){
   res.sendfile('page6.html');
});

io.on('connection', function(socket){
	
   socket.on('msg', function(msg){
     
      io.sockets.emit('newmsg', msg);
   });
});

http.listen(port, function(){
   console.log('listening on localhost:'+port);
});