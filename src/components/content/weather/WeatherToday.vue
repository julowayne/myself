<template>
  <div id="today">
    The temperature in <span id="city">{{ city }}</span> is {{ TodayTemperature }} °c
  </div>
</template>

<script>
export default {
  name: 'WeatherToday',
  
  props: {
    city: String,
    TodayTemperature: Number
  }
}
</script>

<style>

#today {
  padding: 20px;
}

#city {
  color: white;
  font-size: bold;
}

</style>