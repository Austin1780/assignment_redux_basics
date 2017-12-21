import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { bankApp } from "./reducers.js";
import {
  createAccount,
  setDateFilter,
  setAccountFilter,
  setAccountSort,
  deposit,
  withdrawl,
  transfer
} from "./actions.js";

let store = createStore(bankApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  createAccount({
    owner: "Max",
    balance: "10"
  })
);

store.dispatch(
  deposit({
    toId: "1",
    amount: "5",
    date: "2017-12-21"
  })
);

store.dispatch(setDateFilter("2017-11-15"));
store.dispatch(setAccountFilter("1"));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
