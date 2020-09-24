import React from 'react';
import { connect } from 'react-redux';
import { OpenCartModal, 
    OpenWishListModal, 
    DeleteFromCart, 
    DeleteFromWishList, 
    IncrementCartProducts,
    DecrementCartProducts } from '../../redux/actions/index.js';
import ModalList from './modal.jsx'

const mapStateToProps=(state)=>{
    const { openCart, openWishList, wishList, cartList, books } = state.booksReducer
    return {
        openCart,
        openWishList,
        cartList,
        wishList,
        books
    }
}

const mapDispatchToProps=(dispatch)=>({
    openCartModal: ()=> dispatch(OpenCartModal()),
    openWishListModal: () => dispatch(OpenWishListModal()),
    deleteFromWishList: (any) => dispatch(DeleteFromWishList(any)),
    deleteFromCart: (any) => dispatch(DeleteFromCart(any)),
    incrementCartProducts: (any) => dispatch(IncrementCartProducts(any)),
    decrementCartProducts: (any) => dispatch(DecrementCartProducts(any))
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalList)