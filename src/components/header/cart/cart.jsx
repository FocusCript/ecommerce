import React from 'react';
import { RiShoppingCartFill } from 'react-icons/ri'
import './cart.css'

class CartLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='cart_wrapper'>
                <div className='badge-counter product_counter'><span class="badge badge-danger text-light">5</span></div>
                <div className='cart_logo'>
                    <RiShoppingCartFill className='cart_icon'/>
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