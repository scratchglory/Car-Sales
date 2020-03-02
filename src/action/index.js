// ACTION CREATORS
// triggered when 'Add' is clicked on; item === store.feature object
export function addItem(item) {
  return {
    type: "ADD_ITEM",
    payload: item
  };
}

export function removeItem(item) {
  console.log("removeItem", item);
  return {
    type: "REMOVE_ITEM",
    payload: item
  };
}
