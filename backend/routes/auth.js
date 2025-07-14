const express = require('express');
const { loginUser, registerUser } = require('../controllers/authControllers');
const authenticateToken = require('../utils/jwt')
const router = express.Router();


router.post('/login', loginUser);

//logout
//router.post('/');
//router.post('/createlstingsample, authenticateToken, controller);

//refresh jwt


router.post('/register', registerUser);

//export all the above

module.exports = router;