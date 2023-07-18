// create web server
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('hello world');
});
app.listen(port, function () {
    console.log('app listening on port ' + port);
});
app.get('/skills', function (req, res) {
   res.send('I can\'t demo copilot.');
});
app.listen(port, function () {
    console.log('app listening on port ' + port);
});
