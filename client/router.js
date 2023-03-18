import {createRouter, createWebHistory} from 'vue-router'
import {Home, Profile, Users, SignUp, EditProfile, SignIn, PageNotFound} from './pages'
import store from './store'

const routes = [
  { path: '/profile/:userId', component: Profile, meta: {authRequired: true}},
  { path: '/users/edit/:userId', component: EditProfile, meta: {authRequired: true}},
  { path: '/users', component: Users},
  { path: '/signin', component: SignIn},
  { path: '/signup', component: SignUp},
  { path: '/', exact: true, component: Home} 
]
routes.push({ path: '/:pathMatch(.*)*', component: PageNotFound})

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired && !store.state.auth.isAuthenticated) {
    next('signin')
  } else {
    next()
  }
})

export default router