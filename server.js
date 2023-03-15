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
const List = require('./models/createList.js')
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

// ============= Create personalized packing list ========= //



// CREATE

app.post('/list', async (req, res)=>{
    const createdList = await List.create(req.body);
        res.json(createdList);
});


// INDEX
app.get('/list', async (req, res)=>{
    const allLists = await List.find({});
        res.json(allLists); //.json() will send proper headers in response so client knows it's json coming back
    });
// DELETE
app.delete('/list/:id', async (req, res)=>{
    const deletedList = await List.findByIdAndRemove(req.params.id);
        res.json(deletedList);
    
});

// UPDATE
app.put('/list/:id', async (req, res)=>{
    const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updatedList);
    
});







mongoose.connect(rominaURI)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoDB...');
});
                                            
app.listen(4000, ()=>{
    console.log("listening")
});