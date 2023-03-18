import store from '../store'

const getHeaders = (isAuth) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  if (isAuth) {
    headers['Authorization'] = 'Bearer ' + store.state.auth.token
  }
  return headers
}

const handler = async (url, request) => {
  try {
    let response = await fetch(url, request)
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export { getHeaders, handler}