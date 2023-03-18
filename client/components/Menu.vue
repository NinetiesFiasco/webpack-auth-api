<template>
  <nav>

    <router-link to="/">Home</router-link>
    <router-link to="/users">Users</router-link>
    
    <template v-if="isAuthenticated && user">
      <router-link :to="`/profile/${user._id}`">Profile</router-link>
      <a href="#" @click="signOut">Sign out</a>
    </template>
    
    <template v-else>
      <router-link to="/signin">Sign in</router-link>
      <router-link to="/signup">Sign up</router-link>
    </template>

  </nav>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Menu',
  computed: {
    ...mapState({
      isAuthenticated: state => state.auth.isAuthenticated,
      user: state => state.profile.user
    })
  },
  methods: {
    ...mapActions({
      signOut: 'auth/signOut'
    })
  }
}
</script>
