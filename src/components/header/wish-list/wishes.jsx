import React from 'react';
import { BsStarFill } from 'react-icons/bs'
import './wishes.css'

class Wishes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='wish_wrapper cursor-pointer' onClick={this.props.openWishListModal} >
                <BsStarFill className='wishes_icon'/>
            <div className='badge-counter'><span class="badge badge-danger text-light">{this.props.totalCountWishList}</span></div>
                <h5>Wishes</h5>
            </div>
         );
    }
}
 
export default Wishes;