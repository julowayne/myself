<script setup>
import MenuBar from './components/leftmenu/MenuBar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <MenuBar />
    </div>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header .wrapper {
    min-width: 18vw;
    min-height: 100vh;
  }

  main {
    margin-left: 50px;
  }
}
</style>
