import axios from 'axios'

const request = axios.create({
  baseURL: 'https://5ee400715dd8b80016082b48.mockapi.io/api/v1',
})

export const getUserData = async () => {
  const response = await request
    .get('/user/')
    .then(({ data }) => data)
    .catch((err) => {
      throw err.response
    })

  return response
}
