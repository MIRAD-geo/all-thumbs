import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import App from "./App";
import store from './store.js'

ReactDOM.render(
  <Provider store = {store}>
  <HashRouter>
    <App />
  </HashRouter>
  </Provider>,
  document.getElementById("root")
)