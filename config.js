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

module.exports.showtime = showTime();
module.exports.writeLog = function (param) {
    var fs = require('fs');
    var stream = fs.createWriteStream("./logs/file.txt", {'flags': 'a'});
    stream.once('open', function(fd) {
        stream.write(param+"\n");
        stream.end();
    });
}


