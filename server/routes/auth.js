const express = require('express');
const { loginUser, registerUser, logoutUser, nologout } = require('../controllers/authControllers');
const router = express.Router();


router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.post('/register', registerUser);

router.post('/nologout', nologout);

module.exports = router;