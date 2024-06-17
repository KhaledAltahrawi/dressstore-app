// marketplace-app/database.js

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/Marketplace';


const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error: ', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
