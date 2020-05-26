import React from 'react';
import ReactDOM from 'react-dom';
import CartReducer from "./components/cart/CartReducer";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(CartReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

