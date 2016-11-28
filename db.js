var mysql = require("mysql");
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'wap_poin',
});
module.exports.dataquery = function(queryString, callback) {
    try {
        connection.connect();
        // console.log('Step 1');

        connection.query(queryString,function(err,rows){
            // console.log('Step 2');
            if(err) throw err;
            console.log('Data received from Db:\n');
            callback(rows);
            return rows;
        });
        callback();

        connection.end();
        console.log('Step 3');
    } catch(err) {
        // console.log("EXCEPTION : " + err);
    }
};