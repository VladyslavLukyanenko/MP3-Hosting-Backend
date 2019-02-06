var express = require('express');
var app = express();

var upload = require('./routes/upload.js');
var uploads = require('./routes/uploads.js');

app.use('/upload', upload);
app.use('/uploads', uploads);

app.get('*', function(req, res){
  res.status(404).send("Not found");
});

app.listen(80);