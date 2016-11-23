var http = require('http'),
    qs   = require('querystring'),
    conf = require("./config.js");
    // conn = require("./db.js");

conf.writeLog("start query : "+conf.showtime);

http.createServer(function(req, res) {
    if (req.method === 'POST' && req.url === '/login') {
        var body = '';
        req.on('data', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            var data = qs.parse(body);
            // now you can access `data.email` and `data.password`
            res.writeHead(200);
            res.end(JSON.stringify(data));
        });
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(8000);

// var query = 'SELECT * FROM tbl_user';
// var r = conn.dataquery(query, function(result) {
//     var arrpush = [];
//     result.forEach(function (hasil) {
//         var arrGet = 'Data result : ' + hasil.username;
//         arrpush.push(arrGet);
//         console.log(arrGet);
//     });
//     console.log(arrpush);
//     conf.writeLog("end query : "+arrpush+" "+conf.showtime);
// });
