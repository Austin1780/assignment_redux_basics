import { combineReducers } from "redux";

// Import the action type constants
import { CREATE_ITEM, PURCHASE_ITEM , SET_CATEGORY_FILTER, SET_PURCHASE_FILTER, } from "./actions";

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

const categoryFilter = (state = "all", action) => {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.data;
    default:
      return state;
  }
};

const nameSort = (state="", action) => {
  switch(action.type) {
    case "SET_NAME_SORT":
      return action.data;
    default:
      return state;
  }
}

const descriptionSort = (state="", action) => {
  switch(action.type) {
    case "SET_DESCRIPTION_SORT":
      return action.data;
    default:
      return state;
  };
}

// Combine our 2 reducers into one
export const groceryListApp = combineReducers({
  groceryList,
  purchaseFilter,
  categoryFilter,
  nameSort,
  descriptionSort
});
