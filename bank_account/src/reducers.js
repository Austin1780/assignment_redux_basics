import {combineReducers} from 'redux';
import {
  CREATE_ACCOUNT,
  DEPOSIT,
  WITHDRAWL,
  TRANSFER,
  SET_DATE_FILTER,
  SET_ACCOUNT_FILTER,
  SET_ACCOUNT_SORT,
} from './actions';

const bank = (state = {accounts: [], transactions: []}, action) => {
  switch(action.type) {
    case CREATE_ACCOUNT:
      return [...state, action.data];
    case DEPOSIT:
      return
    case WITHDRAWL
      return
    case TRANSFER
    default:
      return state
  };
};
const createTransaction = (state = [], action) => {
  switch (action.type) {
    case CREATE_TRANSACTION:
      return [...state, action.data];
    default:
      return state;
  }
};

const dateFilter = (state = '', action) => {
  switch (action.type) {
    case SET_DATE_FILTER:
      return action.data;
    default:
      return state;
  }
};

const accountFilter = (state = '', action) => {
  switch (action.type) {
    case SET_ACCOUNT_FILTER:
      return action.data;
    default:
      return state;
  }
};

export const bankApp = combineReducers({
  createAccount,
  createTransaction,
  dateFilter,
  accountFilter,
});
