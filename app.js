const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('jwt-express');
const { PORT } = require('./controllers/keys');

const port = PORT || 3003
global.constants = require('./util/constants');
global.response = require('./util/response');
global.error = require('./util/error');
const http = require('http');
const server = http.createServer(app);

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, authorization');
    next();
};

app.use(allowCrossDomain);

app.use(bodyParser.json({ limit: '4mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '4mb' }));
app.use(jwt.init('candidates_01123', {cookies: false, refresh:false}));

app.use(cookieParser());
app.use(logger('dev'));

app.use('/docs', express.static(__dirname + '/public/docs'));

require('./startup/routes')(app);
require('./startup/db')();

server.listen(port, () => {
    console.log(` server listening on port ${port}`)
});
