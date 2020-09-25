import {ADD_TO_CART} from '../actions/action_types'
import {OPEN_WISHLIST} from '../actions/action_types'
import {OPEN_CART} from '../actions/action_types'
import {FETCH_BOOKS} from '../actions/action_types'
import {DELETE_FROM_WISHLIST} from '../actions/action_types'
import {DELETE_FROM_CART} from '../actions/action_types'
import {ADD_TO_WISHLIST} from '../actions/action_types'
import {INCREMENT_CART_PRODUCTS} from '../actions/action_types'
import {DECREMENT_CART_PRODUCTS} from '../actions/action_types'
import {INCREMENT_WISHLIST_PRODUCTS} from '../actions/action_types'
import {DECREMENT_WISHLIST_PRODUCTS} from '../actions/action_types'
import {GET_CART_COUNTS} from '../actions/action_types'
import {GET_WISHLIST_COUNTS} from '../actions/action_types'
import {GET_TOTAL_PRICE_CART} from '../actions/action_types'
import {GET_TOTAL_PRICE_WISHLIST} from '../actions/action_types'
import { data } from '../../data/books'

const initialState = {
    books: data,
    cartList: [],
    wishList: [],
    openCart: false,
    openWishList: false,
    totalCountCart: 0,
    totalCountWishList: 0,
    totalPriceCart: 0,
    totalPriceWishList: 0
  };


/* helper */
    const stringToInt=(price)=>{
        let clear = ''
        for (let i = 0; i < price.length; i++) {
        if(price[i] !== '$'){
            clear = clear + price[i]
        }
        }
        return parseFloat(clear)
    }
/* helper */

  
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
            const filtredCartList = state.cartList.filter(item=> item.id !== action.payload.id)
            return { ...state, cartList: filtredCartList }

        case DELETE_FROM_WISHLIST: 
            const filtredWishList = state.wishList.filter(item=> item.id !== action.payload.id)
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
            if(state.cartList[i].cartCounter !== 1) state.cartList[i].cartCounter--
            return { ...state }

        case INCREMENT_WISHLIST_PRODUCTS: 
            const l = state.wishList.findIndex(item=> item.id === action.payload.id)
            state.wishList[l].wishCounter++
            return { ...state }
        
        case DECREMENT_WISHLIST_PRODUCTS: 
            const m = state.wishList.findIndex(item=> item.id === action.payload.id)
            if(state.wishList[m].wishCounter !== 1) state.wishList[m].wishCounter--
            return { ...state }

        case GET_CART_COUNTS: 
            let k = 0;
            for (let i = 0; i < state.cartList.length; i++) {
                k +=  state.cartList[i].cartCounter
        } return { ...state, totalCountCart: k}

        case GET_WISHLIST_COUNTS: 
            let q = 0;
            for (let i = 0; i < state.wishList.length; i++) {
                q += state.wishList[i].wishCounter
        } return { ...state, totalCountWishList: q}

        case GET_TOTAL_PRICE_CART:
            let cartPrice = () =>{
                var total = 0
                state.cartList.map(i=>{
                    total += i.cartCounter*stringToInt(i.product_details.price).toFixed(2)
                })  
                return total
            }
            return { ...state, totalPriceCart: cartPrice()}
        
        default: return state
    }
}




export default booksReducer