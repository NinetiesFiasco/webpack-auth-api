import api from 'API'

export default {
  namespaced: true,
  state: () => ({
    list: null,

    newUser: {
      name: '',
      password: '',
      email: ''
    },

    isCreated: false,
    error: ''

  }),
  mutations: {
    setUsers: (state, users) => {
      state.list = users
    },
    setNewUserName: (state, name) => {
      state.newUser.name = name
    },
    setNewUserPassword: (state, password) => {
      state.newUser.password = password
    },
    setNewUserEmail: (state, email) => {
      state.newUser.email = email
    },
    setIsCreated: (state, isCreated) => {
      state.isCreated = isCreated
    },
    setError: (state, error) => {
      state.error = error
    }
  },
  actions: {
    fetchUsers: async ({commit}) => {
      const users = await api.users.list()
      commit('setUsers', users)
    },
    create: async ({state, commit}) => {
      const data = await api.users.create({
        ...state.newUser
      })
      if (data.error) {
        commit('setError', data.error)
      } else {
        commit('setIsCreated', true)
      }
    }
  },
  getters: {}
}