const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
require('dotenv').config()

const Port=process.env.PORT || 3000 // Retrieve the value of the PORT environment variable
const dburl=process.env.DATABASE_URL // Retrieve the value of the DATABASE_URL environment variable

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = dburl;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(Port, () => console.log(`App listening on port ${Port}!`))
