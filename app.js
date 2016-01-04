var express = require('express');
var app = express();

app.use(express.static("index.html"));

var server = app.listen(process.env.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
