import Axios from 'axios'
import config from '../apiConfig'

const axiosInstance = Axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  },
})

const Api = {}

export default Api
