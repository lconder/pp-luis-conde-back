const mongoose = require('mongoose');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME  } = require('../controllers/keys');

module.exports = () => {
    mongoose.Promise = require('bluebird');
    mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);
};
