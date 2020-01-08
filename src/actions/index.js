export const removeFeature = item => {
  // dispatch an action here to remove an item
  return {type:"REMOVE_FEATURE", payload:item};
};

export const buyItem = item => {
  // dipsatch an action here to add an item
  return {type:"BUY_ITEM", payload:item};
};

export const updateAddPrice = item => {

  return {type:"UPDATE_ADD_PRICE", payload:item};
}
