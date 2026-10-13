const express = require('express');
const router = express.Router();
const { generateCsrfToken } = require('../middleware/csrf');

router.get('/csrf-token', (req, res) => {
    try {
        const csrfToken = generateCsrfToken(req, res);
        res.status(200).json({ csrfToken });
    } catch (err) {
        console.error("CSRF error:", err);
        res.status(500).json({ error: "Server error during CSRF generation" });
    }
    
});

module.exports = router;