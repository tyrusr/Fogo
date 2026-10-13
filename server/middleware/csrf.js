const { doubleCsrf } = require('csrf-csrf');

const {
    generateCsrfToken,
    doubleCsrfProtection,
} = doubleCsrf({
    getSecret: () => process.env.CSRF_SECRET,
    getSessionIdentifier: (req) => req.ip,

    cookieName: process.env.NODE_ENV === 'production'
        ? '__Host-psifi.x-csrf-token'
        : 'psifi.x-csrf-token',

    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    },
});

module.exports = { generateCsrfToken, doubleCsrfProtection };