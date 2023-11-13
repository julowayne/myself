// const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.searchCity.name}&appid=${this.owApiKey}&units=metric`)

// 1. https://api.openweathermap.org/data/2.5/weather?q=${this.searchCity.name}&appid=${this.owApiKey}&units=metric
// 2. weather?q=${this.searchCity.name}&appid=${this.owApiKey}&units=metric
// 3. weather?q=${this.searchCity.name}&units=metric
// 4. weather?q=${this.searchCity.name}

import axios from 'axios'

export class WeatherApi {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5/'
    })
  }

  async get(path) {
    const response = await this.instance.get(path)
    return response
  }
}

// await WeatherApi.get('weather', {
//   q: 'Lyon',
//   units: 'metric'
// })
// await WeatherApi.get('forecast/hourly', {
//   q: 'Lyon',
//   units: 'metric'
// })
