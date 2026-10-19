const express = require('express');
const { loginUser, registerUser, logoutUser, nologout, getLoggedInUser } = require('../controllers/authControllers');
const { authenticateUser } = require('../middleware/authMiddleware');
const { validateUserInput } = require('../middleware/validateUserInput');
const { validationReturnError } = require('../middleware/validationReturnError');
const router = express.Router();


router.post('/login', validateUserInput, validationReturnError, loginUser);

router.post('/logout', validateUserInput, validationReturnError, logoutUser);

router.post('/register', validateUserInput, validationReturnError, registerUser);

router.post('/nologout', nologout);

router.get('/getuser', authenticateUser, getLoggedInUser);

module.exports = router;