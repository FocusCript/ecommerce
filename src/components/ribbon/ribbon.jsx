import React from 'react';
import './ribbon.css'

const Ribbon = (props)=>{
    return(
        <div class="corner-ribbon top-left red shadow">{props.price}</div>
    )
}

export default Ribbon