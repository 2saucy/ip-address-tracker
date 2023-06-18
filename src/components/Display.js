import React from "react";

const Display = ({ info }) => {

    if (!info){
        return <p>Loading..</p>
    }

    return(
        <div className="display">
            <div>
                <p>Ip Address</p>
                <p>{info.query}</p>
            </div>
            <hr/>
            <div>
                <p>Location</p>
                <p>{`${info.city}, ${info.country}`}</p>
            </div>
            <hr/>
            <div>
                <p>Timezone</p>
                <p>{info.timezone}</p>
            </div>
            <hr/>
            <div>
                <p>ISP</p>
                <p>{info.isp}</p>
            </div>
        </div>
    );
}

export default Display;