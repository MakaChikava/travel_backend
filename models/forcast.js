const forecasts = [
  'Sunny with clear skies',
  'Mostly cloudy with scattered showers',
  'Partly cloudy with chance of thunderstorms',
  'Overcast with light rain',
  'Clear skies with gusty winds',
  'Snow flurries',
  'Heavy snowfall',
  'Hazy with high humidity',
  'Foggy with low visibility',
  'Freezing rain',
  'Sleet and freezing drizzle'
];

module.exports = [

{
  city: 'Los Angeles',
  state: 'California',
  temperature: {
    current: 72,
    high: 80,
    low: 60
  },
  humidity: 55,
  wind: {
    speed: 5,
    direction: 'West'
  },
  get forecast() {
    return forecasts[Math.floor(Math.random() * forecasts.length)];
  },
  sunrise: '6:30 AM',
  sunset: '6:30 PM'
},

{
  city: 'San Francisco',
  state: 'California',
  temperature: {
    high: 65,
    low: 55,
    get current() {
      return Math.floor(Math.random() * (this.high - this.low + 1) + this.low);
    }
  },
  humidity: 75,
  wind: {
    speed: 10,
    direction: 'Northwest'
  },
  get forecast() {
    return forecasts[Math.floor(Math.random() * forecasts.length)];
  },
  sunrise: '7:00 AM',
  sunset: '7:00 PM'
},

{
    city: 'New York',
    state: 'New York',
    temperature: {
      high: 55,
      low: 45,
      get current() {
        return Math.floor(Math.random() * (this.high - this.low + 1) + this.low);
      }
    },
    humidity: 60,
    wind: {
      speed: 15,
      direction: 'Northeast'
    },
    get forecast() {
      return forecasts[Math.floor(Math.random() * forecasts.length)];
    },
    sunrise: '6:30 AM',
    sunset: '6:30 PM'
  },
  
  {
    city: 'Paris',
    country: 'France',
    temperature: {
      high: 15,
      low: 5,
      get current() {
        return Math.floor(Math.random() * (this.high - this.low + 1) + this.low);
      }
    },
    humidity: 70,
    wind: {
      speed: 10,
      direction: 'Southwest'
    },
    get forecast() {
      return forecasts[Math.floor(Math.random() * forecasts.length)];
    },
    sunrise: '7:30 AM',
    sunset: '7:30 PM'
  },

  {
    city: 'Cape Town',
    country: 'South Africa',
    temperature: {
      high: 25,
      low: 15,
      get current() {
        return Math.floor(Math.random() * (this.high - this.low + 1) + this.low);
      }
    },
    humidity: 65,
    wind: {
      speed: 20,
      direction: 'Southeast'
    },
    get forecast() {
      return forecasts[Math.floor(Math.random() * forecasts.length)];
    },
    sunrise: '6:30 AM',
    sunset: '7:00 PM'
  },
  
  {
    city: 'Seattle',
    state: 'Washington',
    temperature: {
      high: 12,
      low: 6,
      get current() {
        return Math.floor(Math.random() * (this.high - this.low + 1) + this.low);
      }
    },
    humidity: 80,
    wind: {
      speed: 15,
      direction: 'West'
    },
    get forecast() {
      return forecasts[Math.floor(Math.random() * forecasts.length)];
    },
    sunrise: '7:00 AM',
    sunset: '6:00 PM'
  }

]