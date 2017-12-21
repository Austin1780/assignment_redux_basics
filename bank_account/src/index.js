import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { bankApp } from "./reducers.js";
import {
  createAccount,
  createTransaction,
  setDateFilter,
  setAccountFilter,
  setAccountSort
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
  createTransaction({
    type: "deposit",
    sourceAccount: "ext",
    recipientAccount: "1",
    amount: "5",
    date: "2017-12-21"
  })
);

store.dispatch(setDateFilter("2017-11-15"));
store.dispatch(setAccountFilter("1"));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
