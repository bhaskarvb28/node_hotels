const mongoose = require('mongoose');
require('dotenv').config();

//Define the MongoDB connection URL
//Local URL
//const mongoURL = process.env.MONGODB_URL_LOCAL // Replace 'hotels' with your database name
//Online URL
const mongoURL = process.env.MONGODB_URL;
// Set up MongoDB connection
// If you don't pass these parameters you'll get some error
// MongoDB constantly upgrades itself
mongoose.connect(mongoURL, /*{
    useNewUrlParser: true, //Connection we establish using the URL is the new URL
    useUnifiedTopology: true,
}*/)

//Mongoose defines or maintains a default connection object. That object is responsible always to perform or interact in any database connection
// Get the default connection
// Mongoose mainains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', () => {
    console.log("Connected to MongoDB server");
})

db.on('error', (err) => {
    console.log("MongoDB connection error", err);
})

db.on('disconnected', () => {
    console.log("MongoDB disconnected");
})

// Export the database connection

module.exports = db;

