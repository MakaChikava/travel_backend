const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  image: String,
  state: String,
  city: String,
  temperature: String,
  humidity: String,
  wind: String,
  sunrise: String,
  sunset: String,
});

  const Weather = mongoose.model('Weather', weatherSchema);
  module.exports= Weather;





// const weatherSchema = new mongoose.Schema ([{
    
//     location: {
//       city: {
//         type: String,
//         description: String
//       },
//       state: {
//         type: String,
//         description: String
//       },
//       temperature: {
//           high: {
//             type: Number,
//             description: String
//           },
//           low: {
//             type: Number,
//             description: String
//           },
//           current: {
//             type: Number,
//             description: String,
//             readOnly: {type: Boolean, default: true}
//           }
//       },
//       humidity: {
//         type: Number,
//         description: String
//       },
//       wind: {
//           speed: {
//             type: Number,
//             description: String
//           },
//           direction: {
//             type: String,
//             description: String
//           }
//       },
//       forecast: {
//         type: String,
//         description: String,
//         readOnly: {type: Boolean, default: true}
//       },
//       sunrise: {
//         type: String,
//         description: String
//       },
//       sunset: {
//         type: String,
//         description: String
//       }
//     }
//   }])