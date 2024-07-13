const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false
    },
    is_active: {
        type: Boolean,
        required: false
    }
});
module.exports = mongoose.model('User', User);