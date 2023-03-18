<template>
  <h1>Page not found</h1>
  <button @click="goHome">Go home</button>
</template>

<script>
export default {
  name: 'PageNotFound',
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>