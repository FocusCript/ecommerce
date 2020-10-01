import React from 'react';
import book_logo from '../logos/book_logo.png'
import SearchField from './search-field/search';
import Categories from '../categories/categories-container'
import CartLayout from './cart/cart-container'
import Wishes from './wish-list/wish-container'
import './header.css'



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className='under_navbar_box'>
                   <img src={book_logo} className='book_logo ml-5' alt='logo' height='72px' width='132px'></img>
                    <SearchField/>
                    <CartLayout/>
                    <Wishes/>
                </div>
                <Categories/>
            </div>
        );
    }
}
 
export default Header;