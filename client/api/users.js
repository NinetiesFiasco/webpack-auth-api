import {handler, getHeaders} from './utils'
const API_URL = '/api/users/'

const create = async (user) => {
  return handler(API_URL, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(user)
  })
}

const list = async () => {
  return handler(API_URL, {
    method: 'GET'
  })
}

const read = async (userId) => {
  return handler(`${API_URL}${userId}`, {
    method: 'GET',
    headers: getHeaders(true),
  })
}

const update = async (userId, user) => {
  return handler(`${API_URL}${userId}`, {
    method: 'PUT',
    headers: getHeaders(true),
    body: JSON.stringify(user)
  })
}

const remove = async (userId) => {
  return handler(`${API_URL}${userId}`, {
    method: 'DELETE',
    headers: getHeaders(true),
  })
}

export default {create, list, read, update, remove}