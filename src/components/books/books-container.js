import { connect } from 'react-redux';

import { 
    AddToCart, 
    AddToWishList,
    DeleteFromCart,
    DeleteFromWishList,
    countCart,
    countWishList,
    getCartPrice
}  from '../../redux/actions/index'

import Books from './books.jsx';

const mapStateToProps=(state)=>{
    const {  wishList, cartList } = state.booksReducer
    return {
        cartList,
        wishList
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (any) => dispatch(AddToCart(any)),
    addToWishList: (any) => dispatch(AddToWishList(any)),
    countCart: () => dispatch(countCart()),
    countWishList: () => dispatch(countWishList()),
    getCartPrice: () => dispatch(getCartPrice()),
    deleteFromWishList: (any) => dispatch(DeleteFromWishList(any)),
    deleteFromCart: (any) => dispatch(DeleteFromCart(any)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);