//import from middlware/authmiddleware
//improt from utils/jwt
//import from sanatizeinputs
//import from validate user input?
//import from congig/db
//import errormiddleware from middleware

const Listing = require('../models/Listing');

//post listing
    //try
        //check if authenticated by checking jwt and csrf token
        //then sanatize input fields of form such as desctiption and title
        //check if price is valid and the lengths of the text stuff is valid
        //connect to the db await
        //create new listing object
        //redirect user to home page or to the new listings page not sure
    //catch
        //use errormiddleware

const createListing = async (req, res) => {
    try{
        const { name, price, description, image } = req.body;
        const userId = req.user.id;
        const newListing = new Listing({ name, price, description, image, listerRef: userId })
        await newListing.save(); 

        res.status(201).json({message: "Listing created successfully" });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
}

const getListings = async (req, res) => {
    try{
        const listings = await Listing.find({});
        //later add pagination
        res.json(listings);
    } catch(err) {
        console.log('Failed to get listings');
        res.status(404).json({ error: "Not found"});
    }
}
//get listing
    //try
        //connect to db async
        //get listing chunk based on pagination
        //return array of listings
    //catch
        //use error middleware

//handle bid
    //try
        //chekd if authenticated by checking jwt and csrf
        //check if bid is valid with validatior
        //connect to db
        //filter to get all bids for that listing
        //check if the new bid is higher then the last highest bid
        //place bid if everything checks out by adding a new bid object in the db with the user and lsiting reference
        //redirect to listing page
    //catch
        //use error middleware

//handle delete listing
    //try
        //chekd if authenticated by checking jwt and csrf
        //check if user is the creator of the listing
        //connect to db
        //get the item to delete and delete from listing collection
        //redirect to home page or user profile page
    //catch
        //use error middleware

//handle close listing?
    // either timed close or let user decide not sure which just yet



module.exports = { createListing, getListings }