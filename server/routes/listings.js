const express = require('express');
//import controller
const { createListing, getListings, getListing, placeBid, getUsersBids, getUserListings, endListing, collectListing } = require('../controllers/listingControllers');
const router = express.Router();
const { authenticateUser } = require('../middleware/authMiddleware');

//get listings chunk, based on what page if using paination 20 results per page
router.get('/', getListings)
//get single listing when user clicks on one

//create listing/post listing
router.post('/createlisting', authenticateUser, createListing);
//edit listing 

router.post('/getlisting', getListing/*authenticate?*/);
//delete listing

//place bid
router.patch('/:id/bid', authenticateUser, placeBid)

router.get('/userbids', authenticateUser, getUsersBids);

router.get('/userlistings', authenticateUser, getUserListings);

router.patch('/:id/endlisting', authenticateUser, endListing);

router.delete('/:id/collectlisting', authenticateUser, collectListing);

//export all above
module.exports = router;