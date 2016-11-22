var conf = require("./config.js");

conf.writeLog("start query : "+conf.showtime);


// conn.query('SELECT * FROM tbl_user',function(err,rows){
//     if(err) throw err;
//
//     console.log('Data received from Db:\n');
//     console.log(rows);
// });

// conf.end(function(err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
// });

