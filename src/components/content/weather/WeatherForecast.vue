<template>
  <div id="forecast">
    <table>
      <thead>
        <tr>
          <th colspan="2">Next days</th>
        </tr>
      </thead>
      <tbody>
        <WeatherForecastDay 
        v-for="(weather, index) in weathers"
          :key="index"
          :weather="weather"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import WeatherForecastDay from './WeatherForecastDay.vue';

export default {

 name: "WeatherForecast",

 components: {
    WeatherForecastDay
  },

 props: {
    weathers: Array
  } 

}

</script>

<style>

</style>