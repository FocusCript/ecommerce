import React from 'react';
import { Search } from 'react-bootstrap-icons'
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
                        <span className="input-group-text"><Search className='mr-2'/></span>
                    </div>
            </div>
         );
    }
}
 
export default SearchField;