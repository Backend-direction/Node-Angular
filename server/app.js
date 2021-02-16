var express = require('express');
var mongoose = require('mongoose');
const path = require('path');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var app = express();
require('dotenv').config()

var port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '..', 'front-client', 'dist')));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
setupController(app);
apiController(app);


app.listen(port); 