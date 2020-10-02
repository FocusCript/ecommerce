import React from 'react';
import Adv from './adv/adv';
import './banner.css';
import { SliderComponent } from './carousel/carousel';

class Banner extends React.Component {
    render() { 
        return ( 
            <div className='banner_wrapper d-flex align-items-center'>
                <div className='carousel_wrapper'>
                    <SliderComponent/>
                </div>
                <div className='adv_wrapper'>
                    <Adv/>
                </div>
            </div>
         );
    }
}
export default Banner;