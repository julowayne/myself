<template>
  <div id="forecast">
    <h3 id="next-days">Next Days</h3>
    <WeatherForecastDay v-for="(weather, index) in weathers" :key="index" :weather="weather" />
  </div>
</template>

<script>
import WeatherForecastDay from './WeatherForecastDay.vue'

export default {
  name: 'WeatherForecast',

  components: {
    WeatherForecastDay
  },

  props: {
    weathers: Array
  }
}
</script>

<style scoped>
#forecast {
  display: flex;
  flex-flow: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  color: #e9ecef;
}

#next-days {
  margin-bottom: 15px;
}
</style>
