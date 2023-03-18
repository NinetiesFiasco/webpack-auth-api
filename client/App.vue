<template>
  <div>
    <Menu />
    <router-view />
  </div>
</template>

<script>
import {Menu} from './components'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {Menu},
  created() {
    this.initialization()
  },
  methods: {
    ...mapActions({
      initialization: 'auth/initialization'
    })
  }
}
</script>

<style>
</style>