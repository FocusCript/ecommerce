import React, { Component } from 'react';
import './carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import foto1 from '../../../components/book-images/akkusticheskie-kabel.jpg'
import foto2 from '../../../components/book-images/the5wake.gif'
import foto3 from '../../logos/book_logo.png'

class Carouserl extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Carousel className='carousel_' infiniteLoop autoPlay>
                <div>
                    <img src={foto1} alt='imageno'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={foto1} alt='imageno'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={foto1} alt='imageno'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={foto1} alt='imageno'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={foto1} alt='imageno'/>
                    <p className="legend">Legend 1</p>
                </div>
                
            </Carousel>
         );
    }
}
 
export default Carouserl