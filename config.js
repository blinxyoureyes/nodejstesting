module.exports = {

    con: function() {
        var mysql = require("mysql");
        var fs = require('fs');
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "wap_poin"
        });
        conn.connect(function(err){
            if(err){
                console.log('Error connecting to Db');
                return;
            }
            console.log('Connection established');
        });
        return;
    },

    writeLog: function (param) {
        var fs = require('fs');
        var stream = fs.createWriteStream("./logs/file.txt", {'flags': 'a'});
        stream.once('open', function(fd) {
            stream.write(param+"\n");
            stream.end();
        });
    },

    showtime: function () {
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

};

