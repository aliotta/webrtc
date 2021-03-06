var express = require('express');
var apiKey = '4d8m5j5rx2bj4i';
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;
var path = require('path');
var cors = require('cors');
app.use(cors());
app.get('/', function(req, res, next) { 
  res.sendFile(path.join(__dirname + '/client/video.html')); 
});

app.get('/style.css', function(req, res, next) { 
  res.sendFile(path.join(__dirname + '/client/assets/css/style.css')); 
});

app.get('/client.js', function(req, res, next) { 
  res.sendFile(path.join(__dirname + '/client/client.js')); 
});

app.get('/peer.min.js', function(req, res, next) { 
  res.sendFile(path.join(__dirname + '/client/assets/scripts/peer.min.js')); 
});

var server = app.listen(process.env.PORT || 8000);

var options = {
    debug: true,
    key: apiKey
}

app.use('/peerjs', ExpressPeerServer(server, options));