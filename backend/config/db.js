const mongoose = require('mongoose');

const mongoDB = "mongodb://localhost:27017/Mydb";

const connectDB = async ()=> {
    try {
        await mongoose.connect(mongoDB);
        console.log('MongoDB Connected')
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
        //catch use error from error middleware
    }
}

module.exports = connectDB;