import { combineReducers } from "redux";

// Import the action type constants
import { CREATE_ITEM, PURCAHSE_ITEM } from "./actions";

// Puppies reducer
// Default state is simply an empty array
// (no puppies yet)
const groceryList = (state = [], action) => {
  // Use the same action type constants from actions file
  switch (action.type) {
    case CREATE_ITEM:
      return [...state, action.data];
    case PURCHASE_ITEM:
      return state.map(item => {
        if (item.id === action.data) {
          return {
            ...item,
            desiredAmount: item.desiredAmount--,
            currentAmount: item.currentAmount++
          };
        }
        return item;
      });

    default:
      return state;
  }
};

// Separate reducer for the filter which is independent
// from the puppies.
const purchaseFilter = (state = "NOT_PURCHASED", action) => {
  switch (action.type) {
    case SET_PURCHASE_FILTER:
      return action.data;
    default:
      return state;
  }
};

const categoryFilter = (state = "ALL", action) => {
  switch (action.type) {
    case SET_CATEOGRY_FILTER:
      return action.data;
    default:
      return state;
  }
};

// Combine our 2 reducers into one
export const groceryListApp = combineReducers({
  groceryList,
  purchaseFilter,
  cateogryFilter
});
