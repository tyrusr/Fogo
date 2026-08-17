//import { authmiddleware, errormiddleare } from middleware
//import jwt from utils


// get users profile
    //try
        //check jwt with secret called from /middleware/authmiddleare and utils/jwt
        //try to get user profile from the db
        //try to get their bids from the db
        //if empty/undefined make empty list
        //try to get their listins from the db
        //if empty/undefined make empty list
        //return user page info if all successful
    //catch
        //use error middleware


//handle edit profile
    // if get then send
        //try
            //check jwt with secret called from /middleware/authmiddleare and utils/jwt
            //try to get user profile from the db
            //display profile creation layout but with the values=current stuff in db
        //catch
            //use error middleware
    //if post then update
        //try
            //check jwt with secret called from /middleware/authmiddleare and utils/jwt
            //try to get user profile from the db and update
            //if successful redirect to profile page
        //catch 
            //use error middleware

//handle delete profile
    //try
        //check jwt with secret called from /middleware/authmiddleare and utils/jwt
        //try to get user profile from the db and delete
        //if successful redirect to home page
    //catch
        //use error middleware 

//export all