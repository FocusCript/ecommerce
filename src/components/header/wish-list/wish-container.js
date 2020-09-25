import React from 'react';
import Wishes  from './wishes.jsx'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/index'

const mapStateToProps=(state)=>{
    const { totalCountWishList } = state.booksReducer
    return {
        totalCountWishList,
    }
}

const mapDispatchToProps=(dispatch)=>({
    openWishListModal: () => dispatch(actions.OpenWishListModal()),
})



export default connect(mapStateToProps, mapDispatchToProps)(Wishes)