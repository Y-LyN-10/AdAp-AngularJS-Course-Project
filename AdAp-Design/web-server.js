'use strict';

var express = require('express');
var app = express();

// Serve up content from public directory
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 3000, function () {
   console.log('The server is running');
});