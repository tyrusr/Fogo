require('dotenv').config();
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const cors = require('./middleware/cors');
const routes = require('./routes');
const { doubleCsrfProtection } = require('./middleware/csrf');
const cookieParser = require('cookie-parser');

const app = express();
const port = 5000;

app.use(compression());
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
  //allows cookies for jwt authentication
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use('/api', doubleCsrfProtection);

app.use('/api', routes);


connectDB()
  .then(() => {
    app.listen(port, ()=> {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to db")
  });
    