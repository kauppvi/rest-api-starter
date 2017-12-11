// server.js

// BASE SETUP
// =============================================================================

// packages
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

// config
const config     = require('./config');

// database
mongoose.Promise = global.Promise;
mongoose.connect(config.database); // connect to db

// app
const port       = config.port;   

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', require('./controllers'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server running at ' + port);
