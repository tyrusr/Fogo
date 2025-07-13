//grab  all routes from everything
const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const securityRoutes = require('./security');
//const listingsRoutes = require('./listings');
//const userRoutes = require('./users');

router.use('/security', securityRoutes);
router.use('/auth', authRoutes);
//router.use('/listings', listingsRoutes);
//router.use('/users', userRoutes);

module.exports = router;
//then export to app.js