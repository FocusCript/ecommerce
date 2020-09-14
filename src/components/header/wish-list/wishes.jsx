import React from 'react';
import { Star } from 'react-bootstrap-icons'
import './wishes.css'

class Wishes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='wish_wrapper mr-5'>
                <Star/>
                <div className='badge-counter'><span class="badge badge-danger text-light">20</span></div>
                <h5>Wishes</h5>
            </div>
         );
    }
}
 
export default Wishes;