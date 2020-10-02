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
                <div className='cart_logo'>
                    <RiShoppingCartFill className='cart_icon'/>
                    <p>Cart</p>
                    <p>({this.props.totalCountCart} items)</p>
                </div>
                <div className='price_box mr-2'>
                    <div className='price'>
                    <p>${this.props.totalPriceCart.toFixed(2)}</p>
                    </div>
                    <button onClick={this.props.openCartModal}>Checkout</button>
                </div>
            </div>
         );
    }
}
 
export default CartLayout;