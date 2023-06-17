import React, { useEffect } from "react";
import L from "leaflet";
//import iconLocation from '../assets/icon-location.svg'

const Map = () => {

    useEffect(() => {

        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors' }).addTo(map);
        map.setView([51.505, -0.09], 50);

        return () => {
            map.remove()
        };
    
    },[]);

    return <div id="map" style={{ height: "180px" }}></div>;
}

export default Map;
