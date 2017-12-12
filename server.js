const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

// config
const config     = require('./config/config');

// database
mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useMongoClient: true });

// app
const port       = config.port; 

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// register routes
// all of our routes will be prefixed with /api
app.use('/api', require('./routes/routes'));

// START THE SERVER
app.listen(port);
console.log('Server running at ' + port);
