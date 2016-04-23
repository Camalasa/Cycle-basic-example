
var express = require('express');
var app = express();

app.get('/hest', function (req, res) {
  res.sendfile('./public/index.html', {root: __dirname});
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
