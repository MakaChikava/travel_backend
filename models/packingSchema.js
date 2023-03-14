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

  // sunnyList:{
  //                 top:[String],
  //                 bottoms:[String],
  //                 shoes:[String],
  //                 headgear: [String],
  //                 accessories: [String]
  //         },

  // rainyList:{
  //             top:[String], 
  //             bottoms:[String],
  //             shoes:[String],
  //             headgear: [String],
  //             accessories: [String]
  //         },

  // hardRainList:{
  //                 top:[String], 
  //                 bottoms:[String],
  //                 shoes:[String],
  //                 headgear: [String],
  //                 accessories: [String]
  //             }
);

const Item = mongoose.model('Item', packingListSchema);
module.exports= Item;



// const packingListSchema = new mongoose.Schema ([{

//       type: { type: String },
//       name: { type: String },
//       weatherRating: { type: String }

//     }

//   ]);
  
//   const Item = mongoose.model('Item', packingListSchema);
//   module.exports= Item;