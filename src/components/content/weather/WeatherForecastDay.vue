<template>
  <div>
    <tr>
    <td>
      {{ day }}
      {{ weather.temperature }} °
    </td>
    <td>
      <img
        v-if="weather"
        :src="weatherImages"
        alt="weather image"
      />
    </td>
  </tr>
  </div>
</template>

<script>

import dayjs from 'dayjs';

export default {

 name: "WeatherForecastDay",

 props: {
    weather: Object
  },

  computed: {

    day() {
      return dayjs(this.weather.day).format("dddd MMM");
    },

    weatherImages() {
      const futureWeather = this.weather.weatherCondition.toLowerCase()
      return new URL(`../../../assets/img/${futureWeather}.png`, import.meta.url).href
    },
  }

}

</script>

<style>

</style>