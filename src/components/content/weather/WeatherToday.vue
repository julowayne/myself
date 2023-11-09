<template>
  <div id="today">
    The temperature in <span id="city"> {{ city }} </span> is {{ todayTemperature }} °c
  </div>
</template>

<script>
export default {
  name: 'WeatherToday',
  
  props: {
    city: String,
    todayTemperature: Number
  }
}
</script>

<style>

#today {
  display: flex;
  justify-content: center;
  padding: 20px;
}

#city {
  color: white;
  font-size: bold;
  margin: 0 5px;
}

</style>