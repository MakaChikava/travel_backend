const mongoose = require('mongoose')


const packingListSchema = new mongoose.Schema ([{

      type: { type: String },
      name: { type: String },
      weatherRating: { type: String }

    }

  ]);
  
  const Item = mongoose.model('Item', packingListSchema);
  module.exports= Item;