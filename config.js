const dbUsername        = process.env.DATABASE_USERNAME;
const dbPassword        = process.env.DATABASE_PASSWORD;
const serverPort        = process.env.PORT || 8080;

module.exports = {

    'database': 'mongodb://'+dbUsername+':'+dbPassword+'@ds115131.mlab.com:15131/mycookbook',
    'port'    : serverPort
};
