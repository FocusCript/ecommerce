import React from 'react';
import { connect } from 'react-redux';

import Tabs from './tabs.jsx'

const mapStateToProps=(state)=>{
    const { data, title } = state.booksReducer.selectedCategory
    const { searchedBook } = state.booksReducer
    return {
        selectedData: data,
        selectedTitle: title,
        searchedBook
    }
}



export default connect(mapStateToProps, null)(Tabs);