<template>
  <div>
    The temperature in {{ city }} is {{  TodayTemperature }} °c
  </div>
</template>

<script>
export default {
  name: "WeatherToday",
  props: {
    city: String,
    TodayTemperature: Number,
  },
}
</script>

<style>

</style>