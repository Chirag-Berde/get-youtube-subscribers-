const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')
// Loads environment variables from a .env file into process.env object.
require('dotenv').config()

// Retrieve the value of the DATABASE_URL environment variable
const dburl=process.env.DATABASE_URL

// Connect to DATABASE
const DATABASE_URL = dburl;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()