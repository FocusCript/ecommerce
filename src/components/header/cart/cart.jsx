import React from 'react';
import { RiShoppingCartFill } from 'react-icons/ri'
import './cart.css'
import store from '../../../redux/store/index'

class CartLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        console.log(this.props)
    }

    onClick=()=>{
        console.log(this.props)
        this.props.openCartModal()
    }

    render() { 
        return ( 
            <div className='cart_wrapper'>
                <div className='badge-counter product_counter'><span class="badge badge-danger text-light">5</span></div>
                <div className='cart_logo'>
                    <RiShoppingCartFill className='cart_icon'/>
                    <p>Cart</p>
                    <p>({this.props.cartList.length} items)</p>
                </div>
                <div className='price_box mr-2'>
                    <div className='price'><p>$125.0</p></div>
                    <button onClick={this.onClick}>Checkout</button>
                </div>
            </div>
         );
    }
}
 
export default CartLayout;