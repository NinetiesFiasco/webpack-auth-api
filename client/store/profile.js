import api from 'API'

export default {
  namespaced: true,
  state: () => ({
    user: null,
    newName: ''
  }),
  mutations: {
    setUser: (state, user) => {
      state.user = user
      state.newName = user.name
    },
    clearUser: (state) => {
      state.user = null
    },
    setNewName: (state, name) => {
      state.newName = name
    }
  },
  actions: {
    fetchProfile: async ({commit, state}) => {
      const user = await api.users.read(state.user._id)
      commit('setUser', user)
    },
    removeProfile: async({state, commit, dispatch}) => {
      await api.users.remove(state.user._id)
      dispatch('auth/signOut', null, {root: true})
    },
    updateProfile: async({state, dispatch}) => {
      await api.users.update(state.user._id, {name: state.newName})
      dispatch('fetchProfile')
    }
  },
  getters: {}
}