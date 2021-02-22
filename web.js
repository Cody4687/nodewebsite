var express = require('express');
var app = express();
var server = require('http').createServer(app);

    app.use(express.static(__dirname + '/site'));
    app.get('/', function (req, res, next) {
        res.sendFile(__dirname + '/site/index.html');
    });

    server.listen(3000, function () {
        console.log('listening on *:3000');
    });
