import React, { useEffect, useState } from 'react'
import Map from './components/Map'
import Search from './components/Search'
import Display from './components/Display'
import './styles/main.css'

function App () {
  const [ipAddress, setIpAddress] = useState('8.8.8.8')
  const [info, setInfo] = useState({})
  const [coords, setCoords] = useState([51.505, -0.09])
  const [error, setError] = useState('')

  const fetchIpApi = async () => {
    setError('')
    const response = await fetch(`https://ipapi.co/${ipAddress}/json`)
    const data = await response.json()
    if (data.error) {
      setError(data.reason)
    } else {
      setInfo(data)
      setCoords([data.latitude, data.longitude])
    }
  }

  useEffect(() => {
    fetchIpApi()
  }, [ipAddress])

  return (
    <div className="App">
      <div className="container">
        <h1>IP Address Tracker</h1>
        <Search setIpAddress={setIpAddress}/>
        {error && <span>{error}</span>}
        <Display info={info}/>
      </div>
      <Map coords={coords}/>
    </div>
  )
}

export default App
