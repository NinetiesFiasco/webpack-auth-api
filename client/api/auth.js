import {handler, getHeaders} from './utils'
const API_URL = '/api/auth/'

const signIn = async (user) => {
  return handler(`${API_URL}signin/`, {
    method: 'POST',
    headers: getHeaders(),
    credentials: 'include',
    body: JSON.stringify(user)
  })
}

const signOut = async () => {
  return handler(`${API_URL}signout`, { method: 'GET' })
}

export default {signIn, signOut}
 