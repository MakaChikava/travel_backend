const mongoose = require('mongoose')

const packingListSchema = new mongoose.Schema (

          {
              category:String,
              top:[String], 
              bottoms:[String],
              shoes:[String],
              headgear: [String],
              accessories: [String]
          }


);

const Item = mongoose.model('Item', packingListSchema);
module.exports= Item;



