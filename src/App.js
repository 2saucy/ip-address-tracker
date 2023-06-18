import { useEffect, useState } from "react";
import Map from "./components/Map";
import Search from "./components/Search";
import Display from "./components/Display";
import "./index.css";

function App() {

  const [ipAddress, setIpAddress] = useState("8.8.8.8");
  const [info, setInfo] = useState({});
  const [coords, setCoords] = useState([51.505, -0.09]);
  const [error, setError] = useState("");


  const fetchIpApi = async () => {
    setError("")
    const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
    const data = await response.json();
    if(data.status === "success"){
      setInfo(data);
      setCoords([data.lat, data.lon]);
    }else{
      setError(data.message);
    }
  }

  useEffect(() => {
    fetchIpApi()
  },[ipAddress])

  return (
    <div className="App">
      <div className="container">
        <h1>IP Address Tracker</h1>
        <Search setIpAddress={setIpAddress}/>
        {error && <span>{error}</span>}
      </div>
      <Display info={info}/>
      <Map coords={coords}/>
    </div>
  );
}

export default App;
