let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');

let user = require('./api/user');

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

app.use('/users', user);

module.exports = app;
