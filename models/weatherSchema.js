const Schema = {
    "type": "object",
    "properties": {
      "city": {
        "type": "string",
        "description": "The name of the city."
      },
      "state": {
        "type": "string",
        "description": "The name of the state."
      },
      "temperature": {
        "type": "object",
        "properties": {
          "high": {
            "type": "number",
            "description": "The high temperature in Fahrenheit."
          },
          "low": {
            "type": "number",
            "description": "The low temperature in Fahrenheit."
          },
          "current": {
            "type": "integer",
            "description": "A random current temperature between high and low temperatures.",
            "readOnly": true
          }
        }
      },
      "humidity": {
        "type": "number",
        "description": "The humidity in percentage."
      },
      "wind": {
        "type": "object",
        "properties": {
          "speed": {
            "type": "number",
            "description": "The wind speed in miles per hour."
          },
          "direction": {
            "type": "string",
            "description": "The wind direction."
          }
        }
      },
      "forecast": {
        "type": "string",
        "description": "A random forecast from an array of possible options.",
        "readOnly": true
      },
      "sunrise": {
        "type": "string",
        "description": "The time when the sun rises."
      },
      "sunset": {
        "type": "string",
        "description": "The time when the sun sets."
      }
    }
  }
  