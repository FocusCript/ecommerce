import {    FETCH_BOOKS, 
    ADD_TO_CART, 
    ADD_TO_WISHLIST, 
    DELETE_FROM_WISHLIST, 
    DELETE_FROM_CART, 
    OPEN_CART, 
    OPEN_WISHLIST,
    INCREMENT_CART_PRODUCTS,
    DECREMENT_CART_PRODUCTS,
    DECREMENT_WISHLIST_PRODUCTS,
    INCREMENT_WISHLIST_PRODUCTS,
    GET_CART_COUNTS,
    GET_WISHLIST_COUNTS,
    GET_TOTAL_PRICE_CART    } from './action_types';



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
export const IncrementWishListProducts = (payload) =>({
    type: INCREMENT_WISHLIST_PRODUCTS,
    payload
})

export const DecrementWishListProducts = (payload) =>({
    type: DECREMENT_WISHLIST_PRODUCTS,
    payload
})

export const countCart = () =>({
    type: GET_CART_COUNTS,
})

export const countWishList = () =>({
    type: GET_WISHLIST_COUNTS,
})


export const getCartPrice = () =>({
    type: GET_TOTAL_PRICE_CART,
})

