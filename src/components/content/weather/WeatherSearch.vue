<template>
  <div>
    <input v-model.trim="searchCity.name" type="text" @keyup.enter="getWeatherByCity" placeholder="Search other cities">
    <div v-if="displaySearchResult === true">
      The temperature in {{searchCity.name}} is {{ searchCity.temperature }} °c
    </div>
    <div v-else>
      {{ errorMsg }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: "WeatherSearch",
  data: () =>({
    OwApiKey: import.meta.env.VITE_OW_API_KEY,
    displaySearchResult: false,
    searchCity: {
        name: "",
        temperature: 0
    },
    errorMsg: ""
  }),
  methods: {
    getWeatherByCity() {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.searchCity.name}&appid=${this.OwApiKey}&units=metric`).then(resp => {
          console.log(resp);
          console.log(resp.data);
          console.log(resp.data.main);
          this.searchCity.name = resp.data.name;
          this.searchCity.temperature = Math.round(resp.data.main.temp);
          if (resp.status === 200) {
              this.displaySearchResult = true;
          }
      }).catch(error => {
          if (error.response) {
              if (error.response.status === 400)
                  this.errorMsg = "The city you are looking for doesn't exist";
          }
          else if (error.request) {
              console.log(error.request);
          }
          else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
          }
          console.log(error.config);
      });
    },
  }

}
</script>

<style>

</style>