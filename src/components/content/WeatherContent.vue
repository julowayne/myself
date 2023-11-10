<template>
  <div class="content-padding">
    <div class="weather">
      <h1 class="weather-title">Weather</h1>
      <!-- <WeatherSearch /> -->
      <div v-if="todayTemperature" class="container">
        <WeatherToday :todayTemperature="todayTemperature" :city="city" :hour="hour" />
        <WeatherForecast :weathers="weathers" />
      </div>
    </div>
    <div v-if="geolocationDenied">
      <ErrorMessages :message="geolocationDenied"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import WeatherToday from './weather/WeatherToday.vue'
import WeatherForecast from './weather/WeatherForecast.vue'
import ErrorMessages from './weather/ErrorMessages.vue'
// import WeatherSearch from './weather/WeatherSearch.vue'



export default {
  name: 'WeatherContent',

  components: {
    WeatherToday,
    WeatherForecast,
    ErrorMessages
  // WeatherSearch
},

  data: () => ({
    owApiKey: import.meta.env.VITE_OW_API_KEY,
    city: '',
    hour: '',
    todayTemperature: null,
    latitude: null,
    longitude: null,
    weathers: [],
    weatherBackground: '',
    geolocationDenied: ""
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

      const error = (err) => {
        console.warn(`ERROR (${err.code}): ${err.message}`)
        this.geolocationDenied = `You have to accept geolocation to show the weather \nCheck your navigator settings to accept`
      }

      navigator.geolocation.getCurrentPosition(success, error, options)
    },

    getWeatherData() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&appid=${this.owApiKey}&units=metric`
        )
        .then((resp) => {
          console.log(resp)
          this.city = resp.data.city.name
          this.todayTemperature = Math.round(resp.data.list[0].main.temp)
          this.hour = resp.data.list[0].dt_txt
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
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;
}
</style>