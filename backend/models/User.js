const mongoose = require('mongoose');
//use bcrypt to hash passwords

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlenght: 6
    }
})

//model method to hash the password before saving

//model method to compare password to hash

module.exports = mongoose.model('User', userSchema);