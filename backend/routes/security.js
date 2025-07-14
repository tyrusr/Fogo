const express = require('express');
const router = express.Router();

router.get('/csrf-token', (req, res) => {
    const token = req.csrfToken();
    res.json({ csrfToken: token });
});

module.exports = router;