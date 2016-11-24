var http = require('http'),
    qs   = require('querystring'),
    conf = require("./config.js");
    // conn = require("./db.js");

conf.writeLog("start query : "+conf.showtime);

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
