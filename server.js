const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()

const rominaURI=process.env.MONGODB






// mongoose.connect('')
mongoose.connect(rominaURI)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoDB...');
});
                                            
app.listen(3000, ()=>{
    console.log("listening")
});