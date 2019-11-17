import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import Store from "./store";
import App from "./components/App";
import { PersistGate } from "redux-persist/integration/react";
// import "@babel/polyfill";

const { persistor, store } = Store();

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById("root")
);