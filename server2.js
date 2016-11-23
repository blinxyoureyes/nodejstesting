// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

// routes will go here
app.get('/', function(req, res) {
    var username = req.param('username');
    var password = req.param('password');
    res.send('username='+username+'&password='+password);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);