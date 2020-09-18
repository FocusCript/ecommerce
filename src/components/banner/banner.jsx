import React from 'react';
import Adv from './adv/adv';
import './banner.css';
import Carousel from './carousel/carousel'

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='banner_wrapper'>
                <div className='carousel_wrapper'>
                    <Carousel/>
                </div>
                <div className='adv_wrapper'>
                    <Adv/>
                </div>
            </div>
         );
    }
}
 
export default Banner;