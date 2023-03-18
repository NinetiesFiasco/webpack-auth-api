<template>
  <div>
    Profile<br>
    {{ userId }}<br>
    <pre>
      {{user}}
    </pre>
    <button @click='startEditing'>Edit</button>
    <button @click='confirmRemoving'>Delete</button>
  </div>

  <div v-if='isDeleteDialog'>
    Delete
    <div><button @click='cancelRemoving'>Cancel</button></div>
    <div><button @click='removeProfile'>Approve delete</button></div>
  </div>

  <div v-if='isEditDialog'>
    Edit
    <div>Name<input v-model='newName'></div>
    <div><button @click='cancelEditing'>Cancel</button></div>
    <div><button @click='updateProfile'>Update Profile</button></div>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  name: 'Profile',
  created() {
    this.fetchProfile()
  },
  data() {
    return {
      isDeleteDialog: false,
      isEditDialog: false
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.profile.user,
      _newName: (state) => state.profile.newName
    }),
    userId() {
      return this.$route.params.userId
    },
    newName: {
      get() {return this._newName},
      set(value) {this.setNewName(value)}
    }
  },
  methods: {
    ...mapActions({
      fetchProfile: 'profile/fetchProfile',
      removeProfile: 'profile/removeProfile',
      updateProfile: 'profile/updateProfile'
    }),
    ...mapMutations({
      setNewName: 'profile/setNewName'
    }),
    confirmRemoving() {
      this.isDeleteDialog = true;
    },
    cancelRemoving() {
      this.isDeleteDialog = false;
    },
    startEditing() {
      this.isEditDialog = true;
    },
    cancelEditing() {
      this.isEditDialog = false;
    }
  }
}
</script>