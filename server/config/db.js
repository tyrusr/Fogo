const mongoose = require('mongoose');

//make this a local file in env to hide it with gitignore
const mongoDB = "mongodb://127.0.0.1:27017/Mydb";

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