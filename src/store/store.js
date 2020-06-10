import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";

const cartItems = localStorage.getItem("cartItems") ?
  JSON.parse(localStorage.getItem("cartItems")) :
  [];
const initState = {
  cart: {
    items: cartItems
  }
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initState,
  composeEnhancer(applyMiddleware(ReduxThunk))
);
export default store;