const express = require('express');
const { loginUser, registerUser } = require('../controllers/authControllers');
const router = express.Router();


router.post('/login', loginUser);

//logout
//router.post('/');

//refresh jwt


router.post('/register', registerUser);

//export all the above

module.exports = router;