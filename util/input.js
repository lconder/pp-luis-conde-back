const Joi = require('joi');

const create_user = {

    body: {
        age: Joi.number().required(),
        email: Joi.string().email().required(),
        gender: Joi.boolean().required(),
        hobby: Joi.string().required(),
        password: Joi.string().required(),
        phone: Joi.string().regex(/^[0-9]{10}$/).required().error(() => ({ message: "Ingresa 10 dígitos solamente"})),
        name: Joi.string().required(),
    }
};

const login = {
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }
}


module.exports = {
    create_user,
    login
}