import {combineReducers} from 'redux';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import sessionReducer from './reducers/sessionReducer';

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  session: sessionReducer
})
