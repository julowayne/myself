<template>
  <div class="error">
    {{ message }}
  </div>
</template>

<script>

export default {

 name: "ErrorMessages",

 props: {
  message: String
  },
}

</script>

<style>

.error {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
}

</style>