import { connect } from 'react-redux';
import { OpenCartModal, 
    OpenWishListModal, 
    DeleteFromCart, 
    DeleteFromWishList, 
    IncrementCartProducts,
    DecrementCartProducts,
    IncrementWishListProducts,
    DecrementWishListProducts,
    countWishList,
    AddToCart,
    countCart,
    getCartPrice    } from '../../redux/actions/index.js';
import ModalList from './modal.jsx'

const mapStateToProps=(state)=>{
    const { openCart, openWishList, wishList, cartList, books, totalCountCart, totalCountWishList, totalPriceCart } = state.booksReducer
    return {
        openCart,
        openWishList,
        cartList,
        wishList,
        books,
        totalCountCart,
        totalCountWishList,
        totalPriceCart
    }
}

const mapDispatchToProps=(dispatch)=>({
    openCartModal: ()=> dispatch(OpenCartModal()),
    openWishListModal: () => dispatch(OpenWishListModal()),
    deleteFromWishList: (any) => dispatch(DeleteFromWishList(any)),
    deleteFromCart: (any) => dispatch(DeleteFromCart(any)),
    incrementCartProducts: (any) => dispatch(IncrementCartProducts(any)),
    decrementCartProducts: (any) => dispatch(DecrementCartProducts(any)),
    incrementWishListProducts: (any) => dispatch(IncrementWishListProducts(any)),
    decrementWishListProducts: (any) => dispatch(DecrementWishListProducts(any)),
    addToCart: (any) => dispatch(AddToCart(any)),
    countCart: () => dispatch(countCart()),
    countWishList: () => dispatch(countWishList()),
    getCartPrice: () => dispatch(getCartPrice())

})


export default connect(mapStateToProps, mapDispatchToProps)(ModalList)