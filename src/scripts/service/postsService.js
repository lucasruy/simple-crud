import axios from 'axios'

const request = axios.create({
  baseURL: 'https://dev.codeleap.co.uk',
})

export const getAllPosts = async () => {
  const response = await request
    .get('/careers/')
    .then(({ data }) => data)
    .catch((err) => {
      throw err.response
    })

  return response
}

export const createPost = async (payload) => {
  const response = await request
    .post('/careers/', payload)
    .then((data) => data)
    .catch((err) => {
      throw err.response
    })

  return response
}

export const editPost = async (id, payload) => {
  const response = await request
    .patch(`/careers/${id}/`, payload)
    .then((data) => data)
    .catch((err) => {
      throw err.response
    })

  return response
}
