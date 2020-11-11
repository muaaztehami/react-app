import {combineReducers} from 'redux';
import cartReducer from './Product/cartReducer';
import productReducer from './Product/productReducer';
import sessionReducer from './auth/sessionReducer';

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  session: sessionReducer
})
