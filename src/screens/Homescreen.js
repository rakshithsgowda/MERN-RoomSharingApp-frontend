import axios from 'axios'
import { useEffect, useState } from 'react'
import Room from '../components/Room'

export default function Homescreen() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState()
  const [error, SetError] = useState()

  useEffect(() => {
    const url = '/api/rooms/getallrooms'
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(url)
        // console.log(response.data.rooms)
        setRooms(response.data.rooms)
        setLoading(false)
      } catch (err) {
        SetError(true)
        // console.log(err)
        throw Error(err)
        // setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        {loading ? (
          <h1>Loading....</h1>
        ) : error ? (
          <h1>Error....</h1>
        ) : (
          rooms.map((room) => {
            return (
              <div className='col-md-10  mt-3'>
                <Room room={room} />
              </div>
            )
          })
        )}

        <h1>Home Screen</h1>
        <h1>there are {rooms.length} rooms</h1>
      </div>
    </div>
  )
}
