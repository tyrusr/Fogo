//token signing and verification

const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ error: 'Access denied'})
    }

    try {
        const decode = jwt.verify(token, JWT_SECRET);
        req.user = decode;
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Invalid or expired token'});
    }
}

module.exports = authenticateToken;