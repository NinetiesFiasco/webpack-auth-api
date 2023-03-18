<template>
  <div>
    Edit Profile
    <pre>
      {{user}}
    </pre>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'EditProfile',
  computed: {
    ...mapState({
      user: (state) => state.profile.user
    }) 
  }
}
</script>