import Axios from 'axios'
import config from '../apiConfig'

const axiosInstance = Axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  },
})

const Api = {
  getData() {
    return new Promise((resolve, reject) => {
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
