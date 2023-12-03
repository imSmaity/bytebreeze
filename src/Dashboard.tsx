import { useEffect, useState } from 'react'
import { IPerson } from './types'
import Api from './Api'
import getSplitArray from './utils/getSplitArray'
import Table from './Table'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CircularProgress } from '@mui/material'
import emptyImg from './assets/undraw_posting_photo_re_plk8.svg'

const Dashboard = () => {
  // State to store the fetched data, loading status, and chunk size.
  const [data, setData] = useState<IPerson[][] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const chunkSize = 2

  /**
   * Fetches data from the API, splits it into chunks, and updates the component state.
   */
  const fetchData = () => {
    // Call the API to get data.
    Api.getData()
      .then((res: any) => {
        if (res) {
          // Split the data into chunks using the utility function.
          const chunk = getSplitArray(res, chunkSize)
          setData(chunk)
          setLoading(false)
        }
      })
      .catch((error) => {
        // Log any errors that occur during the API call.
        console.log(error)
        setLoading(false)
      })
  }

  // useEffect hook to fetch data when the component mounts.
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div style={{ textAlign: 'center', fontSize: '28px', padding: '20px' }}>
        Dashboard
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '41rem',
          overflowY: 'auto',
        }}
      >
        {!loading ? (
          data && data.length > 0 ? (
            <Table data={data} chunkSize={chunkSize} setData={setData} />
          ) : (
            <div>
              <img
                src={emptyImg}
                style={{ width: '50rem', marginTop: '80px' }}
                alt="Empty"
              />
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '22px',
                  paddingTop: '30px',
                }}
              >
                No data found!
              </div>
            </div>
          )
        ) : (
          <div style={{ paddingTop: '15%' }}>
            <CircularProgress />
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  )
}

export default Dashboard
