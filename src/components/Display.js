import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ info }) => {
  if (!info) {
    return <p>Loading..</p>
  }

  return (
        <div className="display">
            <div className="display__box">
                <p className="display__option">Ip Address</p>
                <p className="display__output">{info.ip}</p>
            </div>
            <hr />
            <div className="display__box">
                <p className="display__option">Location</p>
                <p className="display__output">{`${info.city}, ${info.country_code}`}</p>
            </div>
            <hr />
            <div className="display__box">
                <p className="display__option">Timezone</p>
                <p className="display__output">{`UTC ${info.utc_offset}`}</p>
            </div>
            <hr />
            <div className="display__box">
                <p className="display__option">ISP</p>
                <p className="display__output">{info.org}</p>
            </div>
        </div>
  )
}

Display.propTypes = {
  info: PropTypes.object.isRequired
}

export default Display
