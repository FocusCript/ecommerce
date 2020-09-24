import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AddToCart, AddToWishList, DeleteFromCart, DeleteFromWishList, FetchBooks, OpenCartModal, OpenWishListModal}  from '../../redux/actions/index'


import Books from './books.jsx';


const mapDispatchToProps = (dispatch) => ({
    addToCart: (any) => dispatch(AddToCart(any)),
    addToWishList: (any) => dispatch(AddToWishList(any)),
    deleteFromCart: (any) => dispatch(DeleteFromCart(any)),
    deleteFromWishList: (any) => dispatch(DeleteFromWishList(any)),
    fetchBooks: () => dispatch(FetchBooks()),
    openCartModal: () => dispatch(OpenCartModal()),
    openWishModal: () => dispatch(OpenWishListModal())
});

export default connect(null, mapDispatchToProps)(Books);