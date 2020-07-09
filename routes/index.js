module.exports = app => {

    const express = require('express');
    const api_routes = express.Router();
    const joi = require('express-joi-middleware');
    const input = require('../util/input');
    let jwt = require('jwt-express');

    const controllers = require('../controllers/index');

    api_routes.post('/users', joi(input.create_user), controllers.user.create);
    api_routes.get('/users', jwt.valid(), controllers.user.get);
    api_routes.get('/users/:id', jwt.valid(), controllers.user.by_id);
    api_routes.delete('/users/:id', jwt.valid(), controllers.user._delete);

    api_routes.get('/special', controllers.user.special);

    api_routes.post('/login', joi(input.login), controllers.login.login);
    api_routes.post('/logout', controllers.login.logout);


    app.use('/', api_routes);
};