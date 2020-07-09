const User = require('../models/user');
const bcrypt = require('bcryptjs');
const moment = require('moment');

async function create(req, res, next) {

    try {

        let user = await User.findOne({
            email: req.body.email
        });

        if(user)
            return res.status(401).json(response.error(error.email_registered));

        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(req.body.password, salt);
        user = new User(req.body);
        await user.save();

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

async function get(req, res, next) {

    try {

        const limit =!req.query.limit ? 10 : Number(req.query.limit);
        const page = !req.query.page ? 0 : Number(req.query.page);
        const offset = page * limit;
        const filter = !req.query.filter ? {} : JSON.parse(req.query.filter);

        let match = {};

        if(filter && filter.search) {
            let regex = new RegExp(filter.search,'i');
            match = {
                $or: [
                    {name: regex},
                    {hobby: regex}
                ]
            }

        }

        const count = await User.count(match);
        const users = await User.aggregate([
            {
                $match: match
            },

            {
                $project: {
                    _id: 1,
                    id: "$_id",
                    name: 1,
                    age: 1,
                    email: 1,
                    gender: 1,
                    hobby: 1,
                    phone: 1
                }
            },

            { $skip: offset },
            { $limit: limit }

        ]);

        res.status(200).json(response.data_dashboard(users, count));

    }catch (e) {
        next(e);
    }

}

async function special(req, res, next) {

    try {

        let reference_date = moment().subtract(3, "days");
        let year = Number(reference_date.format("YYYY"));
        let month = Number(reference_date.format("MM"))-1;
        let day = Number(reference_date.format("DD"));

        const users = await User.aggregate([
            {
                $match: {
                    age: {
                       $gt: 18
                    },
                    created_at: {
                        $gte: new Date(year, month, day)
                    },
                    gender: false
                }
            },

            {
                $project: {
                    name: 1,
                    hobby: 1,
                    phone: 1
                }
            },

            {
                $group: {
                    _id: '$hobby',
                    users : { $push: '$$ROOT' },
                },

            },

        ]);

        res.status(200).json({response: users});

    } catch (e) {
        next(e);
    }

}

async function _delete(req, res, next) {

    try {

        const {id} = req.params;
        const user = await User.findById(id);

        if(!user)
            return res.status(401).json(response.error(error.user_not_found));

        await user.remove();
        return res.status(200).json(user);

    } catch (e) {
        next(e);
    }

}

async function by_id(req, res, next) {

    try {

        const {id} = req.params;
        const user = await User.findById(id);

        if(!user)
            return res.status(401).json(response.error(error.user_not_found));

        return res.status(200).json(user);

    } catch (e) {
        next(e);
    }

}

module.exports = {
    _delete,
    by_id,
    create,
    get,
    special
}
