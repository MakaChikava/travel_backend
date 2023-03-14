const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const packingData = require('./models/packingList.js')


const rominaURI = process.env.MONGODB
//Controllers

//models
// const Weather = require('./models/weatherSchema.js')
const Item = require('./models/packingSchema.js')

//middleware
app.use(express.json());
app.use(cors());

//ROUTES
//CREATE
app.post('/location', async (req,res) => {
    const createdItem = await Item.create(req.body)
    res.json(createdItem)
});
//INDEX
app.get('/location', async(req,res) => {
    const allItems = await Item.find({})
    res.json(allItems)
});

//DELETE
app.delete('/location/:id', async (req, res)=>{
    const deletedItem = await Item.findByIdandDelete(req.params.id);
    res.json(deletedItem);
})
//UPDATE
app.put('/location/:id', async (req, res)=>{
    const updatedItem = await Item.findByIdandUpdate(req.params.id, req.body, {new:true});
    res.json(updatedItem);
})

//SEED
app.post('/location/seed', async (req,res) => {
    const seededItems = await Item.create(packingData);
    res.json(seededItems)
})

mongoose.connect(rominaURI)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoDB...');
});
                                            
app.listen(3000, ()=>{
    console.log("listening")
});