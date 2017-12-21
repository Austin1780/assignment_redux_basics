export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const CREATE_TRANSACTION = "CREATE_TRANSACTION";
export const SET_DATE_FILTER = "SET_DATE_FILTER";
export const SET_ACCOUNT_FILTER = "SET_ACCOUNT_FILTER";
export const SET_ACCOUNT_SORT = "SET_ACCOUNT_SORT";

let nextAccountId = 0;
export const createAccount = data => {
  return {
    type: CREATE_ACCOUNT,
    data: {
      ...data,
      id: nextAccountId++
    }
  };
};

let nextTransactionId = 0;
export const createTransaction = data => {
  return {
    type: CREATE_TRANSACTION,
    data: {
      ...data,
      id: nextTransactionId++
    }
  };
};

export const setDateFilter = data => {
  return {
    type: SET_DATE_FILTER,
    data
  };
};

export const setAccountFilter = data => {
  return {
    type: SET_ACCOUNT_FILTER,
    data
  };
};
