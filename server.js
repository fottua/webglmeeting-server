var http = require('http');
var express = require('express');
var app = express();




var request = http.get("http://stats.zello.com/channels-suggest/ru/", function(response) {
  app.get('/', function (req, res) {
    res.send(request);
  });
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
});
