const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

MONGO_URI = ''






// mongoose.connect('')
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoDB...');
});


app.listen(3000, ()=>{
    console.log("listening")
})