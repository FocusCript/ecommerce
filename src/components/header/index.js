import React from 'react';
import Navbar from './navigation/nav';
import book_logo from '../logos/book_logo.png'
import { Cart, Star } from 'react-bootstrap-icons';
import SearchField from './search-field/search';
import './header.css'
import Catigories from './mini-catigories/mini-catigories';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Navbar/>
                <div className='under_navbar_box'>
                   <img src={book_logo} className='book_logo ml-1' alt='logo' height='72px' width='132px'></img>
                    <SearchField/>
                    <div className='cart_wrapper'>
                        <div className='cart_logo'>
                            <Cart size='27px'/>
                            <p>Your Cart</p>
                            <p>(items)</p>
                        </div>
                        <div className='col-md-12 price_box'>
                            <div className='price'><p>$125.0</p></div>
                            <button>Checkout</button>
                        </div>
                    </div>
                    <div className='wish_wrapper'>
                        <Star/>
                        <div className='badge-counter'><span class="badge badge-danger text-light">20</span></div>
                        <h5>Wishes</h5>
                    </div>
                </div>
                <Catigories/>
            </div>
        );
    }
}
 
export default Header;