const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema[{
    "type": "object",
    "properties": {
      "city": {
        "type": "string",
        "description": "The name of the city."
      },
      state: {
        type: String,
        description: String
      },
      temperature: {
        type: object,
        properties: {
          high: {
            type: Number,
            description: String
          },
          low: {
            type: Number,
            description: String
          },
          current: {
            type: Number,
            description: String,
            readOnly: {type: Boolean, default: true}
          }
        }
      },
      humidity: {
        type: Number,
        description: String
      },
      wind: {
        type: object,
        properties: {
          speed: {
            type: Number,
            description: String
          },
          direction: {
            type: String,
            description: String
          }
        }
      },
      forecast: {
        type: String,
        description: String,
        readOnly: {type: Boolean, default: true}
      },
      sunrise: {
        type: String,
        description: String
      },
      sunset: {
        type: String,
        description: String
      }
    }
  }]
  

  const Weather = mongoose.model('Weather', weatherSchema);
  module.exports= Weather;
