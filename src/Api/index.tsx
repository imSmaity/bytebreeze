import Axios from 'axios'
import config from '../apiConfig'

// Create an instance of Axios with a base URL and common headers.
const axiosInstance = Axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  },
})

const Api = {
  /**
   * Fetches data from the API.
   * @returns {Promise<any>} A promise that resolves with the fetched data or rejects with an error.
   */
  getData() {
    return new Promise((resolve, reject) => {
      // Make a GET request to the specified API endpoint.
      axiosInstance
        .get(
          config.CATALOG.BASE.concat(config.STATIC.BASE).concat(
            config.FILE.BASE
          )
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
}

export default Api
