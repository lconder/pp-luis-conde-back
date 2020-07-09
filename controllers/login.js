const User = require('../models/user');
const bcrypt = require('bcryptjs');

async function login(req, res, next) {

    try {
        console.log(req.body);
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user)
            return res.status(401).json(response.error(error.user_not_found));

        if(!bcrypt.compareSync(password, user.password))
            return res.status(401).json(response.error(error.incorrect_password));

        let token = res.jwt({
            id: user._id
        });

        return res.status(200).json({
            id: user._id,
            jwt: token.token
        });


    }catch (e) {
        next(e);
    }


}

async function logout(req, res, next) {

    try {

        return res.status(200).json(response.success());

    }catch (e) {
        next(e);
    }

}


module.exports = {
    login,
    logout
};
