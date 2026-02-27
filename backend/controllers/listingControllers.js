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
        const listings = await Listing.find({}).sort({ createdAt: -1 });
        //later add pagination

        res.json(listings);
    } catch(err) {
        console.log('Failed to get listings');
        res.status(404).json({ error: "Not found"});
    }
}

const getListing = async (req,res) => {
    console.log("getlisting ran");
    try{
        //unjsonify the id
        const { id } = req.body;
        console.log(id);
        const listing = await Listing.findById(id);
        //console.log(listing);
        res.json(listing);

    } catch(err) {
        res.status(404).json({ error: "Not found"});
        console.log("error ran");
    }
}

//function async
 //get req.body if post

 //try
   //variable and query db with id
   //check if the current bid is higher then previous
     //if so then update bid amount and higher bid await
   //respond ok

//catch errors and pass specific messages for errors
  

const placeBid = async (req, res) => {
    //get body
    //get bidder from jwt

    //try
        //get the listing
        //compare current amount vs new bid if so throw error and send message
        //get current bidder profile
        //compare the current bidder is not the highest bid if so throw error and send message
        //if nothing wrong then go ahead and just place the bid with query selectors
        //note user might need to be redirected to the listing page after but that is a front end thing
        //return success
    //catch
        //handle errors
}


//get profile for page
  //possibly need to update auth middleware to compare secret or do it in the function
  
  //async function
    //try catch
     //compare jwt colie with secred if incorrect throw error
     // if ok then query db for the user and store in var
     //return state and user in json
    //catch error and return messages possibly depending on the error or later use rrror handling middleware and just send error to next and get rid of boiler plate code



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



module.exports = { createListing, getListings, getListing }