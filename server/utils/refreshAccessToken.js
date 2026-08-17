const jwt = require('jsonwebtoken');
const generateAccessToken = require('./generateToken');
const User = require('../models/User');

async function refreshAccessToken(refreshToken) {
    try {
        const decode = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const user = await User.findById(decode.id);
        if (!user) return null;

        const accessToken = generateAccessToken(user);
        return { accessToken }
    } catch (err) {
        return null;
    }
}

module.exports = refreshAccessToken;