//grab  all routes from everything
const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
//const listingsRoutes = require('./listings');
//const userRoutes = require('./users');

router.use('/auth', authRoutes);
//router.use('/listings', listingsRoutes);
//router.use('/users', userRoutes);

module.exports = router;
//then export to app.js