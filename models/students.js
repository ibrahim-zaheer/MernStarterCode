const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phonenumbers: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }})


    const Userinfo = mongoose.model('Userinfo', userSchema);

    module.exports = Userinfo;    