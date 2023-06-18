import React, { useEffect } from "react";
import L from "leaflet";
//import iconLocation from '../assets/icon-location.svg'

const Map = ({ coords }) => {

    useEffect(() => {

        const map = L.map('map');
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors' }).addTo(map);
        map.setView(coords, 25);

        return () => {
            map.remove()
        };
    
    },[coords]);

    return <div id="map" style={{ height: "180px" }}></div>;
}

export default Map;
