import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "./ActionTypes";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((addedToCart) => {
    if (addedToCart.type === "Prints") {
      addedToCart.count += 1;
      productAlreadyInCart = true;
    } else{
      addedToCart.count = 1;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({
      ...product,
      count: 1
    });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({
    type: ADD_TO_CART,
    payload: {
      cartItems
    }
  });
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((added) => added.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      cartItems
    }
  });
}