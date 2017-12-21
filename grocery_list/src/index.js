import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import the createStore method from Redux
import {createStore} from 'redux';
import {groceryListApp} from './reducers.js';
import {
  createItem,
  purchaseItem,
  setPurchaseFilter,
  setCategoryFilter,
  setNameSort,
  setDescriptionSort,
} from './actions.js';

// Create the store, passing in the reducer as the
// only argument
let store = createStore(groceryListApp);

// Set up the listener. The subscribe method returns a
// function to unregister the listener so set it equal
// to a variable for later use.
let unsubscribe = store.subscribe(() => {
  // Log the new state to the console
  console.log(store.getState());
});

const CATEGORY_LIST = [
  'all',
  'cereal',
  'crackers',
  'dairy',
  'meat',
  'fruit',
  'vegetables',
];

store.dispatch(
  createItem({
    name: 'Nutty nuggets',
    description: 'A unsurpassed brand of cereal',
    desiredAmount: 2,
    currentAmount: 0,
    category: 'cereal',
  }),
);
store.dispatch(
  createItem({
    name: 'goldfish',
    description:
      'delicious, cheesy crackers for the most distinguished of persons',
    desiredAmount: 53,
    currentAmount: 0,
    category: 'crackers',
  }),
);

store.dispatch(
  createItem({
    name: 'soggy flakes',
    description: 'a decidedly inferior option to nutty nuggets',
    desiredAmount: 1,
    currentAmount: 0,
    category: 'cereal',
  }),
);

store.dispatch(setPurchaseFilter('PURCHASED'));
store.dispatch(setCategoryFilter('cereal'));
store.dispatch(setNameSort("something"));
store.dispatch(setDescriptionSort("crackers"));

// Unregister/cancel the listener
unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
