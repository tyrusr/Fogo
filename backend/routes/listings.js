const express = require('express');
//import controller
const { createListing, getListings } = require('../controllers/listingControllers');
const router = express.Router();
const { authenticateUser } = require('../middleware/authMiddleware');

//get listings chunk, based on what page if using paination 20 results per page
router.post('/', getListings)
//get single listing when user clicks on one

//create listing/post listing
router.post('/createlisting', authenticateUser, createListing);
//edit listing 

//delete listing

//place bid

//export all above
module.exports = router;