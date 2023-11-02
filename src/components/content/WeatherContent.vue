<template>
  <div class="content-padding">
    <div class="weather">
      <h1 class="section-content">
        Météo
      </h1>
      <div>
        The temperature in {{city}} is {{ temperature }} °c
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export default {
  name: "WeatherContent",
  data: () => ({
    city: "",
    temperature: 0,
    OwApiKey: import.meta.env.VITE_OW_API_KEY,
    OaiApiKey: import.meta.env.VITE_OAI_API_KEY,
    latitude: 0,
    longitude: 0,
    weather: "",
    weatherBackground: "",
  }),
  methods: {
    getUserPosition(){
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
    getWeatherData(){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${this.OwApiKey}&units=metric`).then(resp => {
        console.log(resp.data)
        console.log(resp.data.main)
        this.city = resp.data.name
        this.temperature = Math.round(resp.data.main.temp)
      });
    },
    generateBackgroundImg(){
      // OPEN AI
      const response = openai.images.generate({
        prompt: "a white siamese cat",
        n: 1,
        size: "1024x1024",
      });
      this.weatherBackground = response;
      console.log(this.weatherBackground)
    }
  },
  created() {
      this.getUserPosition();
      // this.generateBackgroundImg();
  }
}

</script>

<style>
.weather {
  width: 80vw;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px solid green;
}
</style>