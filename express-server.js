var express = require('express');
var cors = require('cors');
var path = require('path');
var app = express();

var corsOptions = {
  origin: 'http://softuni-ads.azurewebsites.net/'
};

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'AdApp')));
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

function supportCrossOriginScript(req, res, next) {
    res.status(200);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    res.header("Access-Control-Allow-Headers", "Origin");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST, OPTIONS");
    res.header("Access-Control-Allow-Methods","POST, GET, OPTIONS, DELETE, PUT, HEAD");
    res.header("Access-Control-Max-Age","1728000");
    next();
}

// Support CORS
app.options('/result', supportCrossOriginScript);

app.post('/result', supportCrossOriginScript, function(req, res) {
    res.send('received');
    // do stuff with req
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.listen(88);
console.log('Listening on port 88!');