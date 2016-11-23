var mysql = require("mysql");
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'wap_poin',
});
module.exports.dbconn = function(queryString, callback) {
    try {
        connection.connect();
        console.log('Step 1');

        // connection.query(queryString, function(err, rows, fields) {
        //     console.log('Step 2');
        //     if (err) {
        //         console.log("ERROR : " + err);
        //     }
        //     console.log('The solution is: ', rows[0].solution);
        //
        //     callback(rows[0].solution);
        //
        //     return rows[0].solution;
        // });

        connection.query(queryString,function(err,rows){
            if(err) throw err;
            console.log('Data received from Db:\n');
            rows.forEach(function (value) {
                console.log('value = ');
                console.log(value);
            });
                

            // console.log(rows[0].username);
            // callback(rows[0].username);
            // return rows[0].username;
        });
        callback();

        connection.end();
        console.log('Step 3');
    }
    catch(ex) {
        console.log("EXCEPTION : " + ex);
    }
};