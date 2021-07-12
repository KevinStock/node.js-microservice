const express = require('express')
const config = require('./config/config.js');

const app = express();


const routes = require('./api/routes');
routes(app);
app.listen(config.app.port, function() {
    console.log('Server started on port: ' + config.app.port);
});