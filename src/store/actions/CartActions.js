import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY
} from "./ActionTypes";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((addedToCart) => {
    if(addedToCart.id === product.id){
      addedToCart.count += 1;
      productAlreadyInCart = true;
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

export const addQuantity = (items, product) => (dispatch) => {
  const cartItems = items.slice();

  cartItems.forEach((addedToCart) => {
    if (addedToCart.id === product.id) {
      addedToCart.count += 1;
    }
  });

    cartItems.push({
      ...product,
      count: 1
    });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({
    type: ADD_QUANTITY,
    payload: {
      cartItems
    }
  });
};

export const subtractQuantity = (items, product) => (dispatch) => {
  const cartItems = items.slice();

  let addedItem = cartItems.find(item => item.id === product.id);

  if(addedItem.count === 1){
    cartItems.filter((item) => item.id !== product.id);
  } else{
    addedItem.count -= 1;
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({
    type: SUBTRACT_QUANTITY,
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