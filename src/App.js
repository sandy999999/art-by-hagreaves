import React from "react";
import Layout from "./components/layout/Layout";
import { Provider } from "react-redux";
import store from "./store/store";
import ReactBreakpoints from "react-breakpoints";
import breakpoints from "./utils/breakpoints";
import "./sass/style.scss";

function App() {
  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <Provider store={store}>
        <Layout />
      </Provider>
    </ReactBreakpoints>
  );
}

export default App;
