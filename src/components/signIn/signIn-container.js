import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
    signIn
}  from '../../redux/actions/index'


import SignIn from './signIn.jsx';

const mapStateToProps=(state)=>{
    const { signedIn } = state.userReducer
    return {
        signedIn
    }
}

const mapDispatchToProps = (dispatch) => ({
    signIn: (any) => dispatch(signIn(any)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);