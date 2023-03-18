<template>
  Sign in 
  <form>
    <div>
      Email
      <input autocomplete="Email" v-model="email" />
    </div>
    <div>
      Password
      <input type="password" autocomplete="password" v-model="password" />
    </div>
  </form>
  <button @click='signIn'>Sign in</button>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'SignIn',
  computed: {
    ...mapState({
      _email: (state) => state.auth.email,
      _password: (state) => state.auth.password
    }),
    email: {
      get() {return this._email},
      set(value) {this.setEmail(value)}
    },
    password: {
      get() {return this._password},
      set(value) {this.setPassword(value)}
    }
  },
  methods: {
    ...mapMutations({
      setEmail: 'auth/setEmail',
      setPassword: 'auth/setPassword'
    }),
    ...mapActions({
      signIn: 'auth/signIn'
    })
  }
}
</script>