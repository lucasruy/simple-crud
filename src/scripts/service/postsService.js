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
