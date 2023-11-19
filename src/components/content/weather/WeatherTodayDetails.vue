<template>
    <div>
        {{ weatherToday.day }} - {{ weatherToday.temperature }} °c - {{ weatherToday.condition }} 
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'WeatherTodayDetails',

    props: {
        weatherToday: Object
    }
  }
  </script>
  
  <style scoped>

  </style>
  