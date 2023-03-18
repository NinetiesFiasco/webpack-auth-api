import api from 'API'
import router from '../router'

const defaultState = {
  isAuthenticated: false,
  token: '',
  email: '',
  password: '',
  error: ''
}

export default {
  namespaced: true,
  state: () => (defaultState),
  mutations: {
    setIsAuthenticated: (state, isAuthenticated) => {
      state.isAuthenticated = isAuthenticated
    },
    setEmail: (state, email) => {
      state.email = email
    },
    setPassword: (state, password) => {
      state.password = password
    },
    setError: (state, error) => {
      state.error = error
    },
    setToken: (state, token) => {
      state.token = token
    },
    clearAuth: (state) => {
      state = () => (defaultState)
    }
  },
  actions: {
    initialization({state, commit}) {
      if (state.isAuthenticated) 
        return
      if (localStorage.getItem('jwt')) {
        commit('setToken', localStorage.getItem('jwt'))
        commit('setIsAuthenticated', true)
      }
    },
    signIn: async ({state, commit}) => {
      let response = await api.auth.signIn({
        email: state.email,
        password: state.password
      })
      if (response.error) {
        commit('setError', response.error)
      } else {
        commit('setError', '')
        commit('setToken', response.token)
        commit('setIsAuthenticated', true)
        commit('profile/setUser', response.user, {root: true})
        
        localStorage.setItem('jwt', response.token)

        router.push(`/profile/${response.user._id}`)
      }
    },
    signOut: async({commit}) => {
      localStorage.removeItem('jwt')
      localStorage.removeItem('user')

      commit('clearAuth')
      commit('profile/clearUser', null, {root: true})

      await api.auth.signOut();
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00UTC; path = /;"

      router.push('/')
    }
  }
}
