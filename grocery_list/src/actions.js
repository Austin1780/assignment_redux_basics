export const CREATE_ITEM = "CREATE_ITEM";
export const PURCHASE_ITEM = "PURCHASE_ITEM";
export const SET_PURCHASE_FILTER = "SET_PURCHASE_FILTER";
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";

let nextItemId = 1;
export const createItem = data => {
  return {
    type: CREATE_ITEM,
    data: {
      ...data,
      id: nextItemId++
    }
  };
};

export const purchaseItem = id => {
  return {
    type: PURCHASE_ITEM,
    data: id
  };
};

export const setPurchaseFilter = data => {
  return {
    type: SET_PURCHASE_FILTER,
    data
  };
};

export const setCateogryFilter = data => {
  return {
    type: SET_PURCHASE_FILTER,
    data
  };
};
