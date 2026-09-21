const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const securityRoutes = require('./security');
const listingRoutes = require('./listings');

router.use('/security', securityRoutes);
router.use('/auth', authRoutes);
router.use('/listings', listingRoutes)

module.exports = router;