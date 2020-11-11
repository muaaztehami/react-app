import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/productTypes";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((item) => {
    if (item.id === product.id) {
      item.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({ type: ADD_TO_CART, payload: { cartItems: cartItems } });
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({ type: REMOVE_FROM_CART, payload: { cartItems: cartItems } });
};

