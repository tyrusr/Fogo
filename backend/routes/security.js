const express = require('express');
const router = express.Router();

router.get('/csrf-token', (req, res) => {
    try {
        const token = req.csrfToken();

        if (!token) {
            return res.status(500).json({ error: "Failed to generate CSRF token"});        
        } else if (token) {
            res.cookie('XSRF-TOKEN', token, {
                httpOnly: false,
                sameSite: 'strict',
                // secure: true, // enable in production
            })
            res.status(200).json({ message: "CSRF token created" });
        }
    } catch (err) {
        console.error("CSRF error:", err);
        res.status(500).json({ error: "Server error during CSRF generation" });
    }
    
});

module.exports = router;