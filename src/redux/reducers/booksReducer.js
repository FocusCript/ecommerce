import {ADD_TO_CART} from '../actions/action_types'
import {OPEN_WISHLIST} from '../actions/action_types'
import {OPEN_CART} from '../actions/action_types'
import {FETCH_BOOKS} from '../actions/action_types'
import {DELETE_FROM_WISHLIST} from '../actions/action_types'
import {DELETE_FROM_CART} from '../actions/action_types'
import {ADD_TO_WISHLIST} from '../actions/action_types'
import {INCREMENT_CART_PRODUCTS} from '../actions/action_types'
import {DECREMENT_CART_PRODUCTS} from '../actions/action_types'
import {GET_CART_COUNTS} from '../actions/action_types'
import {GET_WISHLIST_COUNTS} from '../actions/action_types'
import { data } from '../../data/books'

const initialState = {
    books: data,
    cartList: [],
    wishList: [],
    openCart: false,
    openWishList: false,
    totalCountCart: 0,
    totalCountWishList: 0
  };
  
const booksReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART: 
            if(state.cartList.findIndex(item=> item.id === action.payload.id) > -1){
                return state
            }
            return { ...state, cartList: [ ...state.cartList, {...action.payload, cartCounter: 1} ]}

        case ADD_TO_WISHLIST: 
            if(state.wishList.findIndex(item=> item.id === action.payload.id) > -1){
                return state
            }
            return { ...state, wishList: [ ...state.wishList, {...action.payload, wishCounter: 1}]}

        case DELETE_FROM_CART: 
            const filtredCartList = state.cartList.filter(item=> item !== action.payload)
            return { ...state, cartList: filtredCartList }

        case DELETE_FROM_WISHLIST: 
            const filtredWishList = state.wishList.filter(item=> item !== action.payload)
            return { ...state, wishList: filtredWishList }

        case FETCH_BOOKS: return state.books = [...data]

        case OPEN_WISHLIST: return { ...state, openWishList: !state.openWishList }

        case OPEN_CART: return { ...state, openCart: !state.openCart}

        case INCREMENT_CART_PRODUCTS: 
            const index = state.cartList.findIndex(item=> item.id === action.payload.id)
            state.cartList[index].cartCounter++
            return { ...state }
        
        case DECREMENT_CART_PRODUCTS: 
            const i = state.cartList.findIndex(item=> item.id === action.payload.id)
            state.cartList[i].cartCounter--
            return { ...state }
        
        case GET_CART_COUNTS: 
        let totalwishCount = 0;
        for (let i = 0; i < state.wishList.length; i++) {
            totalwishCount +=  state.wishList[i].totalwishCount
        } return { ...state, totalCountCart: totalwishCount}
        default: return state
            
    }
}

export default booksReducer