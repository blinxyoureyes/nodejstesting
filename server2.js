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
app.get('/selectUser', function(req, res) {
    console.log(JSON.stringify(req.headers));
    var user = req.query.username;
    var pass = req.query.password;

    if (user !== "" && pass !== "") {
        var appndParams = 'username='+user+' - password='+pass;
        conf.writeLog("["+conf.showtime+"] Param Request : "+appndParams);

        // connect & select to database
        var query = "SELECT * FROM tbl_user";
        var arrpush = [];
        conn.dataquery(query, function(result) {
            result.forEach(function (hasil) {
                var jsonArg1 = new Object();
                jsonArg1.username = hasil.username;
                jsonArg1.password = hasil.password;
                arrpush.push(jsonArg1);
            });
            res.contentType('application/json');
            res.send(JSON.stringify(arrpush));
        });
    } else {
        conf.writeLog("["+conf.showtime+"] parameter is empty");
    }

    // print result
    // res.send('username='+arrpush['username']+'\npassword='+arrpush['password']);
    // res.send(JSON.stringify(arrpush));
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);