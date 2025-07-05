//import validator from middleware
//import sanatizer from middleware
//import methods from model?
//import error middleware from middleware

//create jwt

//create csrf

//refresh jwt once timed out

//handle login async
    //get users input
    //validate users input from validateUserInput
    //try
        //make sure user exists in db
        //get method form model to conmpare the users input to the hashed password in db
        // if everything is good then
            //sign in user 
            // issue a jwt
            //make csrf token?
            //redirect to home page
        //shoudl i make a conditional for each thing that can go wrong or just leave the catch to handle that
    //catch 
        //call error from middleware

//handle logout
    //delete the jwt to prevent stealing or do i just leave it as a cookie
    //not sure what else

//handle register new user
    //get users input
    //validate users input from validateUserInput
    //try
        //check if username already exists
        //check if email is already used
        //if everything is good then
            //create new user
            //issue a jwt
            //make csrf?
            //redirect to home page
        //shoudl i make a conditional for each thing that can go wrong or just leave the catch to handle that
    //catch 
        //call error from middleware


//export all