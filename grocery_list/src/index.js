import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import the createStore method from Redux
import {createStore} from 'redux'
import {groceryApp} from './reducers.js'
import {createItem, purchaseItem} from './actions.js'

// Create the store, passing in the reducer as the
// only argument
let store = createStore(groceryApp)

// Set up the listener. The subscribe method returns a
// function to unregister the listener so set it equal
// to a variable for later use.
let unsubscribe = store.subscribe(() => {
  // Log the new state to the console
  console.log(store.getState())
})


store.dispatch(createItem({
  name: "Nutty nuggets",
  description:"A unsurpassed brand of cereal",
  desiredAmount:2,
  currentAmount:0,
  category:"cereal"
})
)

// Unregister/cancel the listener
unsubscribe()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
