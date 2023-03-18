import {createStore} from 'vuex'
import users from './users'
import profile from './profile'
import auth from './auth'

const store = createStore({
  modules: {
    auth,
    users,
    profile
  }
})

export default store;