var mysql = require("mysql");
var fs = require('fs');

function showTime() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var alltime = +year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
    return alltime;
}

function Conn() {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'wap_poin',
    });
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });
    return;
}

module.exports.conn = Conn();
module.exports.showtime = showTime();
module.exports.writeLog = function (param) {
    var fs = require('fs');
    var stream = fs.createWriteStream("./logs/file.txt", {'flags': 'a'});
    stream.once('open', function(fd) {
        stream.write(param+"\n");
        stream.end();
    });
}

// module.exports = function(param) {
//
//
//     showtime: function () {
//
//     }
//
// };

