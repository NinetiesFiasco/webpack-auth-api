<template>
  Sign Up
  <form>
    <div>
      Name
      <input autocomplete="name" v-model="name">
    </div>
    <div>
      Email
      <input autocomplete="email" v-model="email">
    </div>
    <div>
      Password
      <input autocomplete="password" type="password" v-model="password">
    </div>
  </form>
  <div
    class="error"
    v-if="error"
  >
    {{error}}
  </div>

  <button @click='submit'>Submit</button>

  <div
    v-if="isCreated"
    class='dialog'
  >
    Successfully sign up. Account created. <button @click='signin'>Sign In</button>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  name: "SignUp",
  computed: {
    ...mapState({
      newUserName: (state) => state.users.newUser.name,
      newUserPassword: (state) => state.users.newUser.password,
      newUserEmail: (state) => state.users.newUser.email,
      error: (state) => state.users.error,
      isCreated: (state) => state.users.isCreated,
    }),
    name: {
      get() {return this.newUserName},
      set(value) {this.setNewUserName(value)}
    },
    password: {
      get() {return this.newUserPassword},
      set(value) {this.setNewUserPassword(value)}
    },
    email: {
      get() {return this.newUserEmail},
      set(value) {this.setNewUserEmail(value)}
    }
  },
  methods: {
    ...mapActions({
      create: 'users/create'
    }),
    ...mapMutations({
      setNewUserName: 'users/setNewUserName',
      setNewUserPassword: 'users/setNewUserPassword',
      setNewUserEmail: 'users/setNewUserEmail',
      setIsCreated: 'users/setIsCreated'
    }),
    submit() {
      this.create()
    },
    signin() {
      this.$router.push('/signin')
      this.setIsCreated(false)
    }
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>