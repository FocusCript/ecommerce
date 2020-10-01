import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
    selectTopCategory
}  from '../../redux/actions/index'


import Categories from './categories.jsx';

const mapStateToProps=(state)=>{
    const {   } = state.booksReducer
    return {
       
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectTopCategory: (any) => dispatch(selectTopCategory(any)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);