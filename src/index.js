import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import Reducers from "./redux/Reducer";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import "bulma/css/bulma.css";

const store = createStore(
  Reducers,
  applyMiddleware(reduxThunk)
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
