import {FETCH_BOOKS, 
    ADD_TO_CART, 
    ADD_TO_WISHLIST, 
    DELETE_FROM_WISHLIST, 
    DELETE_FROM_CART, 
    OPEN_CART, 
    OPEN_WISHLIST,
    INCREMENT_CART_PRODUCTS,
    DECREMENT_CART_PRODUCTS
} from './action_types';

export const FetchBooks = () => ({
    type: FETCH_BOOKS
})

export const AddToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
});

export const AddToWishList = (payload) =>({
    type: ADD_TO_WISHLIST,
    payload
})

export const DeleteFromWishList = (payload) =>({
    type: DELETE_FROM_WISHLIST,
    payload
})

export const DeleteFromCart = (payload) =>({
    type: DELETE_FROM_CART,
    payload
})

export const OpenCartModal = (payload) =>({
    type: OPEN_CART,
    payload
})

export const OpenWishListModal = (payload) =>({
    type: OPEN_WISHLIST,
    payload
})

export const IncrementCartProducts = (payload) =>({
    type: INCREMENT_CART_PRODUCTS,
    payload
})

export const DecrementCartProducts = (payload) =>({
    type: DECREMENT_CART_PRODUCTS,
    payload
})

