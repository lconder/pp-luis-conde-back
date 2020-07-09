const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

        name: {type: String, required: true},
        email: {type: String, unique: true, required: true},
        phone: {type: String, required: true},
        password: {type: String, required: true},
        age: {type: Number, required: true},
        gender: {type: Boolean, required: true},
        hobby: {type: String, required: true},

        created_at: {type: Date, select: false, default: Date.now},
        updated_at: {type: Date, select: false, default: Date.now}
    },
    { versionKey: false });


userSchema.pre('save', next => {
    this.updated_at = new Date();
    next();
});

userSchema.set('toObject', {getters: true});
userSchema.set('toJSON', {getters: true});

module.exports = mongoose.model('User', userSchema);
