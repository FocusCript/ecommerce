import React from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import './search.css'

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='input-group search_wrapper'>
                <input type="text" className="form-control" placeholder="Search field" id="demo" name="search"/>
                    <div className="input-group-append">
                        <span className="input-group-text"><BiSearchAlt size='22px' /></span>
                    </div>
            </div>
         );
    }
}
 
export default SearchField;