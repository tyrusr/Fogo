require('dotenv').config();
const express = require('express');
const compression = require('compression');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const cors = require('./middleware/cors');
const routes = require('./routes');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

//const csrfProtection = csrf({ cookie: true });

const app = express();
const port = 5000;

app.use(compression());

app.use(cors({
  origin: 'http://localhost:3000',
  //allows cookies for jwt authentication
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
//add secure: true in deployment
app.use(csrf({ cookie: { httpOnly: false, /* secure: true,*/ sameSite: 'strict' } }));
app.use('/api', routes);
//app.use(csrfProtection);




connectDB()
  .then(() => {
    app.listen(port, ()=> {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to db")
  });
    

//handle bids

//pass all the listings to the front end 
//pagination?

//handle create a new listing

//handle listing timed out

//pass all of the users listings and bids