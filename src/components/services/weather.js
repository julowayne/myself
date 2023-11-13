import axios from 'axios'

export class WeatherApi {
  
  static instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
  })

  static get(path, params = {}) {
    try {
      return this.instance.get(path, { params })
    } catch (error) {
      return error
    }
  }
}
