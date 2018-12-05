const express    = require('express');
const path       = require('path');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const app        = express();

const MONGO_DB = 'WRITE HERE YOUR MONGO DB CONNECT INFORMARION';

// Database
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_DB, {useNewUrlParser: true});
const db = mongoose.connection;
db.once('open', function () {
  console.log('DB connected!');
});
db.on('error', function (err) {
  console.log('DB ERROR:', err);
});

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token');
  next();
});

// API
app.use('/api/users', require('./api/users'));
app.use('/api/auth', require('./api/auth'));

// Server
const port = 3000;
app.listen(port, function(){
  console.log('listening on port:' + port);
});