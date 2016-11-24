// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

// include another
var http = require('http'),
    // qs   = require('querystring'),
    conn = require("./db.js"),
    conf = require("./config.js");

// routes will go here
app.get('/', function(req, res) {
    var username = req.param('username');
    var password = req.param('password');
    var appndParams = 'username='+username+' - password='+password;
    conf.writeLog("["+conf.showtime+"] Param Request : "+appndParams);

    // connect & select to database
    var query = 'SELECT * FROM tbl_user';
    var r = conn.dataquery(query, function(result) {
        var arrpush = [];
        result.forEach(function (hasil) {
            var arrGet = 'Data result : ' + hasil.username;
            arrpush.push(arrGet);
            console.log(arrGet);
        });
        console.log(arrpush);
        conf.writeLog("end query : "+arrpush+" "+conf.showtime);
    });

    // print result
    res.send('username='+username+'\npassword='+password);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);