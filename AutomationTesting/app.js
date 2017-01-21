/**
 * Express server
 */

var express = require('express');
var path = require('path');
var app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/templates/index.html'))
});

app.listen(3000, function(){
	console.log('I am listening on port 3000');
});

