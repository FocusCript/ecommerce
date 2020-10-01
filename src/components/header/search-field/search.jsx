import React from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import './search.css'
import { connect } from 'react-redux'
import { searchBook } from '../../../redux/actions/index'

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    scrollToFindItems=()=>{
        if(this.props.searchedBook.length > 0){
            window.scrollTo(0,200);
        }
    }
    render() { 
        return ( 
            <div className='input-group search_wrapper'>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search field" 
                    name="search" 
                    onChange={e=>this.props.searchBook(e.target.value)}
                />
                    <div className="input-group-append">
                        <span className="input-group-text"><BiSearchAlt size='22px' onClick={this.scrollToFindItems}/></span>
                    </div>
            </div>
         );
    }
}


const mapStateToProps=(state)=>{
    const { searchedBook } = state.booksReducer
    return {
        searchedBook
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchBook: (any) => dispatch(searchBook(any)),
});
 
export default connect(mapStateToProps,mapDispatchToProps)(SearchField);