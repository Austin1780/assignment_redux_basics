import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Import the createStore method from Redux
import { createStore } from "redux";
import { bankApp } from "./reducers.js";
import {
  createAccount,
  createTransaction,
  setPurchaseFilter,
  setDateFilter
} from "./actions.js";

// Create the store, passing in the reducer as the
// only argument
let store = createStore(bankApp);

// Set up the listener. The subscribe method returns a
// function to unregister the listener so set it equal
// to a variable for later use.
let unsubscribe = store.subscribe(() => {
  // Log the new state to the console
  console.log(store.getState());
});

store.dispatch(
  createAccount({
    owner: "",
    balance: "",
    Id: ""
  })
);

store.dispatch(
  createTransaction({
    Id: "",
    type: "",
    sourceAccount: "",
    recipientAccount: "ext",
    date: ""
  })
);

store.dispatch(setDateFilter(""));

// Unregister/cancel the listener
unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
