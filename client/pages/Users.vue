<template>
  All Users
  <div v-for="(user, key) of users" :key="key">
    {{ user }}
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Users',
  computed: {
    ...mapState({
      users: (state) => state.users.list
    })
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    ...mapActions({
      fetchUsers: 'users/fetchUsers'
    })
  }
}
</script>