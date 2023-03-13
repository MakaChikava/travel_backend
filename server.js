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
app.post('/location', async (req,res) => {
    const createdLocation = await Location.create(req.body)
    res.json(createdLocation)
});
//INDEX
app.get('/location', async(req,res) => {
    const allLocations = await Location.find({})
    res.json(allLocations)
});

//DELETE
app.delete('/location/:id', async (req, res)=>{
    const deleteLocation = await Location.findByIdandDelete(req.params.id);
    res.json(deleteLocation);
})
//UPDATE
app.put('/location/:id', async (req, res)=>{
    const updateLocation = await Location.findByIdandUpdate(req.params.id, req.body, {new:true});
    res.json(updateLocation);
})

mongoose.connect(rominaURI)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoDB...');
});
                                            
app.listen(3000, ()=>{
    console.log("listening")
});