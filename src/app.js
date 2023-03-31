const express = require('express');
const app = express()
const path=require("path")
// importing schema
const subscribersModel = require('./models/subscribers')

// adds middleware to an Express app to parse incoming JSON data from HTTP requests.
app.use(express.json())

// homepage route
app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname,"/index.html"))
})

// To get details of all subscribers    
app.get("/subscribers", async (req, resp) => {
    //  handle errors and exceptions that may occur during the execution of a block of code
    try {
        const subscribers = await subscribersModel.find()
        resp.send(subscribers)
    } catch (error) {
        resp.status(404).send(error)
    }
})

// To get names and subscribed channel of all subscribers
app.get("/subscribers/names", async (req, resp) => {
    try {
        // to collect selected data from database 
        const subscriber = await subscribersModel.find().select({
            name: 1,
            subscribedChannel: 1,
            _id: 0
        });
        // return only name and subscribed channel of all subscribers
        resp.send(JSON.stringify(subscriber))
    } catch (error) {
        resp.status(404).send(error)
    }
})

// To get details of the subscriber with given id
app.get("/subscribers/:_id", async (req, resp) => {
    // finds data for the given id
    await subscribersModel.findById(req.params._id).then((data)=>{
        resp.send(data)
    }).catch((error)=>{
        // sending error if id does not match
        resp.status(404).json({
            message : `${req.params._id} does not exist`
        })
    })
})

//  error message if the requested URL path does not match any defined routes 
app.use((req,resp)=>{
    resp.status(404).send({message:"Ooops ! Invalid route"})
})


module.exports = app;
