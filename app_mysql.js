var conf = require("./config.js");
var conn = require("./db.js");

conf.writeLog("start query : "+conf.showtime);

var query = 'SELECT * FROM tbl_user';

var r = conn.dataquery(query, function(result) {
    result.forEach(function (hasil) {
        console.log('Data result : ' + hasil.username);
    });
});

// conn.query('SELECT * FROM tbl_user',function(err,rows){
//     if(err) throw err;
//     console.log('Data received from Db:\n');
//     console.log(rows);
// });

// conn.end(function(err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
// });

