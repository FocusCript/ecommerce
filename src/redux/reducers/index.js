import { combineReducers } from 'redux'
import booksReducer from './booksReducer'


  const rootReducer = combineReducers({
      booksReducer
  })

  // const rootReducer = booksReducer
  
  export default rootReducer