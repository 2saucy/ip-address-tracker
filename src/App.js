import { useEffect, useState } from "react";
import Map from "./components/Map";
import Search from "./components/Search";
import Display from "./components/Display";
import "./index.css"

function App() {

  const [ipAddress, setIpAddress] = useState("8.8.8.8");
  const [info, setInfo] = useState();
  const [coords, setCoords] = useState([51.505, -0.09]);
  const [error, setError] = useState("");


  const fetchTodo = async () => {
    const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
    const data= await response.json();
    if(data.status === "success"){
      setInfo(data);
      setCoords([data.lat, data.lon])
      console.log(data)
    }else{
      setError(data.message)
    }
  }

  useEffect(() => {
    fetchTodo()
  },[ipAddress])

  return (
    <div className="App">
      <h1>Ip Address Tracker</h1>
      <Search setIpAddress={setIpAddress}/>
      {error && <span>{error}</span>}
      <Display info={info}/>
      <Map coords={coords}/>
    </div>
  );
}

export default App;
