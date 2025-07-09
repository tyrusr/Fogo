//grab  all routes from everything
const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const listingsRoutes = require('./listing');
const userRoutes = require('./users');

router.use('/api/auth', authRoutes);
router.use('/api/listings', listingsRoutes);
router.use('/api/users', userRoutes);

module.exports = router;
//then export to app.js