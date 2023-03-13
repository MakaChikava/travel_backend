const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()

const rominaURI = process.env.MONGODB
//Controllers
//models
//middleware
app.use(express.json());
app.use(cors());

//ROUTES
//replace createdlocation with whatever (just a placeholder for now)
//CREATE
app.post('/', async (req,res) => {
    const createdLocation = await Location.create(req.body)
    res.json(createdLocation)
});
//INDEX
app.get('/', async(req,res) => {
    const allLocations = await Location.find({})
    res.json(allLocations)
});

//DELETE

//UPDATE


mongoose.connect(rominaURI)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoDB...');
});
                                            
app.listen(3000, ()=>{
    console.log("listening")
});