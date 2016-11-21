var mysql = require("mysql");
var fs = require('fs');

function writeLog(param) {
    var fs = require('fs');
    var stream = fs.createWriteStream("./logs/file.txt", {'flags': 'a'});
    stream.once('open', function(fd) {
        stream.write(param+"\n");
        stream.end();
    });
}

function ambiltime() {
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

// First you need to create a connection to the db
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "wap_poin"
});

con.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

writeLog("start query : "+ambiltime());

con.query('SELECT * FROM tbl_user',function(err,rows){
    if(err) throw err;

    console.log('Data received from Db:\n');
    console.log(rows);
});

con.end(function(err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});

