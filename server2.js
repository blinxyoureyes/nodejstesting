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
    var user = req.query.username;
    var pass = req.query.password;

    if (user !== "" && pass !== "") {
        var appndParams = 'username='+user+' - password='+pass;
        conf.writeLog("["+conf.showtime+"] Param Request : "+appndParams);

        // connect & select to database
        var query = "SELECT * FROM tbl_user WHERE username='"+user+"'";
        var arrpush = [];
        conn.dataquery(query, function(result) {
            result.forEach(function (hasil) {
                // console.log(hasil);
                var arrGet = 'Data result : ' + hasil.username;
                arrpush.push(arrGet);
                // console.log(arrGet);
            });
            // console.log(arrpush);
            conf.writeLog("end query : "+arrpush+" "+conf.showtime);
        });
    } else {
        conf.writeLog("["+conf.showtime+"] parameter is empty");
    }

    // print result
    res.send('username='+user+'\npassword='+pass);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);