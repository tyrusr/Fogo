const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const cors = require('./middleware/cors');
const routes = require('./routes');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

const csrfProtection = csrf({ cookie: true });

const app = express();
const port = 5000;

connectDB();


app.use(cors({
  origin: 'http://127.0.0.1:3000',
  credentials: true
}));
app.use(cookieParser());
app.use(csrf({ cookie: true }));
app.use(express.json());
app.use('/api', routes);
app.use(csrfProtection);





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