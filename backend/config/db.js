const mongoose = require('mongoose');

const mongoDB = "mongodb://127.0.0.1:27017/Mydb";

const connectDB = ()=> {
    try {
        mongoose.connect(mongoDB);
        console.log('MongoDB Connected')
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
        //catch use error from error middleware
    }
}

module.exports = connectDB;