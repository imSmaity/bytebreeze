import { useEffect, useState } from 'react'
import { Person } from './types'
import Api from './Api'
import getSplitArray from './helper/getSplitArray'

const Dashboard = () => {
  const [data, setData] = useState<Person[][] | null>(null)

  const fetchData = () => {
    Api.getData()
      .then((res: any) => {
        if (res) {
          const chunk = getSplitArray(res, 2)
          setData(chunk)
        }
      })
      .catch(console.log)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <div>Dashboard</div>
}

export default Dashboard
