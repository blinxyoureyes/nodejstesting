var mysql = require("mysql");

function ambiltime() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    console.log(+year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds);
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

