import React from 'react';
import { Cart, Star } from 'react-bootstrap-icons';
import './cart.css'

class CartLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='cart_wrapper'>
                <div className='cart_logo'>
                    <Cart size='27px'/>
                    <p>Your Cart</p>
                    <p>(items)</p>
                </div>
                <div className='price_box mr-2'>
                    <div className='price'><p>$125.0</p></div>
                    <button>Checkout</button>
                </div>
            </div>
         );
    }
}
 
export default CartLayout;