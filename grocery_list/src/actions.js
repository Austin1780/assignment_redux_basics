export const CREATE_ITEM="CREATE_ITEM";
export const PURCHASE_ITEM="PURCHASE_ITEM";

let nextItemId = 1;
export createItem = (data) => {
  return {
    type: CREATE_ITEM,
    data: {
      ...data,
      id: nextItemId++
    }
  };
}

export purchaseItem = (id) => {
  return {
    type: PURCHASE_ITEM;
    data: id
  }     
}

