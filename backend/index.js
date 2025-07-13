const express = require('express');
const connectDB = require('./config/db');
const cors = require('./middleware/cors');
const routes = require('./routes');

const app = express();
const port = 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', routes);






app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
});
    //handle user login

//handle register new user

//pass a listing to the front end

//handle bids

//pass all the listings to the front end 
//pagination?

//handle create a new listing

//handle listing timed out

//pass all of the users listings and bids