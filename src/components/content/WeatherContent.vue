<template>
  <div class="content-padding">
    <div class="weather">
      <h1 class="title">
        Météo
      </h1>
      <!-- <div>
        <input v-model.trim="searchCity.name" type="text" @keyup.enter="getWeatherByCity" placeholder="Search other cities">
        <div v-if="displaySearchResult === true">
          The temperature in {{searchCity.name}} is {{ searchCity.temperature }} °c
        </div>
        <div v-else>
          {{ errorMsg }}
        </div>
      </div> -->
      <WeatherSearch />
      <WeatherToday 
        :TodayTemperature="TodayTemperature"
        :city="city"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import OpenAI from "openai";
import WeatherToday from './weather/WeatherToday.vue';
import WeatherSearch from './weather/WeatherSearch.vue';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export default {
  name: "WeatherContent",
  components: {
    WeatherToday,
    WeatherSearch
  },
  data: () => ({
      OwApiKey: import.meta.env.VITE_OW_API_KEY,
      OaiApiKey: import.meta.env.VITE_OAI_API_KEY,
      city: "",
      TodayTemperature: 0,
      latitude: 0,
      longitude: 0,
      weather: "",
      weatherBackground: ""
  }),
  methods: {
      getUserPosition() {
          const options = {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
          };
          const success = pos => {
              const crd = pos.coords;
              this.latitude = crd.latitude;
              this.longitude = crd.longitude;
              this.getWeatherData();
          };
          function error(err) {
              console.warn(`ERROR (${err.code}): ${err.message}`);
          }
          navigator.geolocation.getCurrentPosition(success, error, options);
      },
      getWeatherData() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${this.OwApiKey}&units=metric`).then(resp => {
            console.log(resp.data);
            console.log(resp.data.main);
            this.city = resp.data.name;
            this.TodayTemperature = Math.round(resp.data.main.temp);
        });
      },
      // getWeatherByCity() {
      //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.searchCity.name}&appid=${this.OwApiKey}&units=metric`).then(resp => {
      //       console.log(resp);
      //       console.log(resp.data);
      //       console.log(resp.data.main);
      //       this.searchCity.name = resp.data.name;
      //       this.searchCity.temperature = Math.round(resp.data.main.temp);
      //       if (resp.status === 200) {
      //           this.displaySearchResult = true;
      //       }
      //   }).catch(error => {
      //       if (error.response) {
      //           if (error.response.status === 400)
      //               this.errorMsg = "The city you are looking for doesn't exist";
      //       }
      //       else if (error.request) {
      //           console.log(error.request);
      //       }
      //       else {
      //           // Something happened in setting up the request that triggered an Error
      //           console.log('Error', error.message);
      //       }
      //       console.log(error.config);
      //   });
      // },
      generateBackgroundImg() {
          // OPEN AI
          const response = openai.images.generate({
              prompt: "a white siamese cat",
              n: 1,
              size: "1024x1024",
          });
          this.weatherBackground = response;
          console.log(this.weatherBackground);
      }
    },
    created() {
        this.getUserPosition();
        // this.generateBackgroundImg();
    },
}

</script>

<style>
.title {
  padding: 15px;
}
.weather {
  width: 80vw;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  /* border: 1px solid green; */
}
</style>