import { combineReducers } from 'redux'
import booksReducer from './booksReducer'
import userReducer from './userReducer'


  const rootReducer = combineReducers({
      booksReducer,
      userReducer
  })

  // const rootReducer = booksReducer
  
  export default rootReducer