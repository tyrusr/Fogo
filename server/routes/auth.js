const express = require('express');
const { loginUser, registerUser, logoutUser, nologout, getLoggedInUser } = require('../controllers/authControllers');
const { authenticateUser } = require('../middleware/authMiddleware');
const router = express.Router();


router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.post('/register', registerUser);

router.post('/nologout', nologout);

router.post('/getuser', authenticateUser, getLoggedInUser);

module.exports = router;