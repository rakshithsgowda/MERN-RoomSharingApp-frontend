import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Homescreen() {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const url = '/api/rooms/getallrooms'
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        // console.log(response.data.rooms)
        setRooms(response.data.rooms)
      } catch (error) {
        // console.log(err)
        throw Error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Home Screen</h1>
      <h1>there are {rooms.length} rooms</h1>
    </div>
  )
}
