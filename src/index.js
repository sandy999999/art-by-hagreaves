import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import ReactBreakpoints from 'react-breakpoints';

const breakpoints = {
    mobile: 320,
    mobileLandscape: 480,
    tablet: 768,
    tabletLandscape: 1024,
    desktop: 1200,
    desktopLarge: 1500,
    desktopWide: 1920,
}

ReactDOM.render(
    <ReactBreakpoints breakpoints={breakpoints}>
        <Provider store={store}>
            <App />
        </Provider>
    </ReactBreakpoints>,
    document.getElementById("root")
);

