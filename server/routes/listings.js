const express = require('express');
const { createListing, getListings, getListing, placeBid, getUsersBids, getUserListings, endListing, collectListing } = require('../controllers/listingControllers');
const router = express.Router();
const { authenticateUser } = require('../middleware/authMiddleware');

//get listings chunk, based on what page if using paination 20 results per page
router.get('/', getListings)

router.post('/createlisting', authenticateUser, createListing);

router.post('/getlisting', getListing/*authenticate?*/);

router.patch('/:id/bid', authenticateUser, placeBid)

router.get('/userbids', authenticateUser, getUsersBids);

router.get('/userlistings', authenticateUser, getUserListings);

router.patch('/:id/endlisting', authenticateUser, endListing);

router.delete('/:id/collectlisting', authenticateUser, collectListing);

module.exports = router;