import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, FILTER_PRODUCTS_BY_PRICE} from "../types/productTypes";

const initialState = { items: [], filteredItems:[], size:'' };
const productReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCH_PRODUCTS:
      return {...state, items: action.payload, filteredItems: action.payload};
    case FILTER_PRODUCTS_BY_SIZE:
      return {...state, filteredItems: action.payload.items, size: action.payload.size};
    case FILTER_PRODUCTS_BY_PRICE:
      return {...state, filteredItems: action.payload.items, sort: action.payload.sort};
    default:
      return state;
  }
}
export default productReducer