<template>
  <div class="content-padding">
    <div class="weather">
      <h1 class="weather-title">Weather</h1>
      <!-- <WeatherSearch /> -->
      <WeatherToday :TodayTemperature="TodayTemperature" :city="city" />
      <WeatherForecast :weathers="weathers" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import WeatherToday from './weather/WeatherToday.vue'
import WeatherForecast from './weather/WeatherForecast.vue'
// import WeatherSearch from './weather/WeatherSearch.vue'



export default {
  name: 'WeatherContent',

  components: {
    WeatherToday,
    WeatherForecast
    // WeatherSearch
  },

  data: () => ({
    OwApiKey: import.meta.env.VITE_OW_API_KEY,
    OaiApiKey: import.meta.env.VITE_OAI_API_KEY,
    city: '',
    TodayTemperature: null,
    latitude: null,
    longitude: null,
    weathers: [],
    weatherBackground: ''
  }),

  methods: {
    getUserPosition() {

      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }

      const success = (pos) => {

        const crd = pos.coords
        this.latitude = crd.latitude
        this.longitude = crd.longitude

        this.getWeatherData()
      }

      function error(err) {
        console.warn(`ERROR (${err.code}): ${err.message}`)
      }

      navigator.geolocation.getCurrentPosition(success, error, options)
    },

    getWeatherData() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&appid=${this.OwApiKey}&units=metric`
        )
        .then((resp) => {
          console.log(resp)
          this.city = resp.data.city.name
          this.TodayTemperature = Math.round(resp.data.list[0].main.temp)
          this.weathers = [
            {
              day: resp.data.list[7].dt_txt,
              temperature: Math.round(resp.data.list[7].main.temp_max),
              weatherCondition: resp.data.list[7].weather[0].main
            },
            {
              day: resp.data.list[15].dt_txt,
              temperature: Math.round(resp.data.list[15].main.temp_max),
              weatherCondition: resp.data.list[15].weather[0].main
            },
            {
              day: resp.data.list[23].dt_txt,
              temperature: Math.round(resp.data.list[23].main.temp_max),
              weatherCondition: resp.data.list[23].weather[0].main
            },
            {
              day: resp.data.list[31].dt_txt,
              temperature: Math.round(resp.data.list[31].main.temp_max),
              weatherCondition: resp.data.list[31].weather[0].main
            },
            {
              day: resp.data.list[39].dt_txt,
              temperature: Math.round(resp.data.list[39].main.temp_max),
              weatherCondition: resp.data.list[39].weather[0].main
            },
          ]
        })
    },
  },
  
  created() {
    this.getUserPosition()
  }
}
</script>

<style>
.weather-title {
  color: #e9ecef;
  padding: 10px;
}
.weather {
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>