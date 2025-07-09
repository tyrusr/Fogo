const express = require('express');
const app = express();
const port = 5000;
const cors = requrie('./middleware/cors');

const routes = require('./routes');
app.use(routes);
app.use(cors);





app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
})
    //handle user login

//handle register new user

//pass a listing to the front end

//handle bids

//pass all the listings to the front end 
//pagination?

//handle create a new listing

//handle listing timed out

//pass all of the users listings and bids