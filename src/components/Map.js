import React, { useEffect } from "react";
import L from "leaflet";
import iconLocation from '../assets/icon-location.svg'

const Map = ({ coords }) => {

    const customIcon = L.icon({
        iconUrl: iconLocation,
        iconSize: [32, 40]
    })

    useEffect(() => {

        const map = L.map('map');
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.marker(coords, {icon: customIcon}).addTo(map);
        map.setView(coords, 10);

        return () => {
            map.remove()
        };
    
    },[coords]);

    return <div id="map"></div>;
}

export default Map;
