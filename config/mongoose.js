const dotEnv = require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect("your_url", { useNewUrlParser: true, useUnifiedTopology: true });


const apiKey = process.env.API_KEY
//
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to database : MongoDb"));

db.once('open', function() {
    console.log('Connected to DataBase :: MongoDb');
})

module.exports = db;
