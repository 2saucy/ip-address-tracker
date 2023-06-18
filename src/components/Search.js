import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ setIpAddress }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleClick = () => {
    setIpAddress(searchQuery)
  }

  return (
        <div className="search">
            <input className="search__input" type="text" value={searchQuery} onChange={handleChange} placeholder="Search for any IP Address or domain" />
            <a className="search__button" href="#" onClick={handleClick} ></a>
        </div>
  )
}

Search.propTypes = {
  setIpAddress: PropTypes.func.isRequired
}

export default Search
