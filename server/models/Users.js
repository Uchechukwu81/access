const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    username: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('register', UserSchema);
module.exports = UserModel;