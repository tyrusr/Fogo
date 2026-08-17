const express = require('express');
const { loginUser, registerUser, logoutUser, nologout } = require('../controllers/authControllers');
//const authenticateToken = require('../utils/jwt')
const {authenticateUser } = require('../middleware/authMiddleware');
const router = express.Router();


router.post('/login', loginUser);

//logout
//router.post('/');
//router.post('/createlstingsample, authenticateToken, controller);
router.post('/logout', logoutUser);

//refresh jwt


router.post('/register', registerUser);

router.post('/nologout', nologout);

//export all the above

//endpoint for no logout

module.exports = router;