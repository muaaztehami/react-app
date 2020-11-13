import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, FILTER_PRODUCTS_BY_PRICE } from "../types/productTypes"
import axios from 'axios';

export const fetchProducts = (email, token, keyword) => (dispatch) => {
// console.log('RUNNNN.......',keyword)
  const headers = {
    'X-User-Email': email,
    'X-User-Token': token
  }
  axios.get("http://localhost:3001/api/v1/products",  {
    headers: headers,
    params: { keyword: keyword }
  })
  .then(response => {
    if (response.status === 200)
    {
      // localStorage.setItem("user", JSON.stringify(response.data))
      console.log("response: ", response.data)
      return dispatch({type: FETCH_PRODUCTS,payload: response.data })
    }
  })
  .catch(error => {
    console.log("login error", error);
  });
}

export const filterProducts = (products, size) => (dispatch) => {
  return dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items: size===''? products: products.filter(a => 
        a.availableSizes.indexOf(size.toUpperCase()) >=0)
    }
  });
}

export const sortProducts = (items, sort) => (dispatch) => {
  const products = items.slice();
  dispatch({
    type: FILTER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      
      items: sort===''? 
      products.sort((a,b) => (a.id>b.id?1:-1)): 
      products.sort((a,b) => 
            (sort==='lowest')? (a.price>b.price?1:-1): (a.price<b.price?1:-1))
    }
  });
}

