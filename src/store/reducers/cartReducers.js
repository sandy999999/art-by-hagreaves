  import { ADD_TO_CART, REMOVE_FROM_CART, SUBTRACT_QUANTITY, ADD_QUANTITY } from "../actions/ActionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { ...state, items: action.payload.cartItems };
    case ADD_QUANTITY:
      return { ...state, items: action.payload.cartItems };
    case SUBTRACT_QUANTITY:
      return { ...state, items: action.payload.cartItems };

    default:
      return state;
  }
}