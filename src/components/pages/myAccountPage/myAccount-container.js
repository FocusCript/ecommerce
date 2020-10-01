import React from 'react';
import MyAccount from './myAccountPage.jsx'
import { connect } from 'react-redux'
import { logOut } from '../../../redux/actions/index'

const mapStateToProps=(state)=>{
    const { signedIn } = state.userReducer
    return {
        signedIn
    }
}

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut()),
});


export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)