import React from 'react';
import CartLayout from './cart.jsx'
import { connect } from 'react-redux'
import { OpenCartModal }  from '../../../redux/actions'

function mapStateToProps(state) {
    const { wishList, cartList, openCart, books } = state.booksReducer
    return {
      cartList,
      wishList,
      openCart,
      books
    }
}

const mapDispatchToProps = (dispatch) => ({
  openCartModal: () => dispatch(OpenCartModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartLayout)







