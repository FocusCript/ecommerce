import React, { Component } from 'react';
import './carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import foto1 from '../../../components/book-images/how-i-build.gif'
import foto2 from '../../../components/book-images/the5wake.gif'
import foto3 from '../../logos/book_logo.png'

class Carouserl extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Carousel className='carousel_' infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="http://lorempixel.com/640/480/sports/1" alt='image'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/640/480/sports/2" alt='image'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/640/480/sports/3" alt='image'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/640/480/sports/5" alt='image'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/640/480/sports/6" alt='image'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/640/480/sports/7" alt='image'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/640/480/sports/8" alt='image'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
         );
    }
}
 
export default Carouserl