import React, { useState } from "react";

const Search = ({ setIpAddress }) => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleClick = () => {
        setIpAddress(searchQuery);
    }

    return(
        <div>
            <input type="text" value={searchQuery} onChange={handleChange} placeholder="Search for any IP Address or domain" />
            <button onClick={handleClick} >Buscar</button>
        </div>
    );
}

export default Search