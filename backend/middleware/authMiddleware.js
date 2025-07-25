//verify jwts
const jwt = require('jsonwebtoken');
const refreshAccessToken = require('../utils/refreshAccessToken');

//protect routes(add to routes)

async function authenticateUser(req, res, next) {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    if (!accessToken) {
        return res.status(401).json({ message: 'Access denied'});
    }

    try {
        const decode =  jwt.verify(accessToken, process.env.JWT_SECRET);
        req.user = decoded;
        return next();
    } catch(err) {
        if(err.name === 'TokenExpiredError') {
            if (!refreshToken) {
                return res.status(401).json({ message: 'Access denied'});
            }

            const newToken = await refreshAccessToken(refreshToken);

            if (!newToken) {
                return res.status(401).json({ message: 'Invalid token'});
            }

            res.cookie('accessToken', newToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 // 1 hour
            });

            req.user = jwt.decode(newToken);
            return next();
        } else {
            return res.status(401).json({ message: 'Invalid token' });
        }
    }
}
