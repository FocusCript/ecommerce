import React from 'react';
import './ribbon.css'

const Ribbon = (props)=>{
    return(
        <div className="corner-ribbon top-left red shadow">{props.price}</div>
    )
}

export default Ribbon