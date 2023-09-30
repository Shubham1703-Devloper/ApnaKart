import {Add_Item, Add_Item_list, Delete_item, Delete_item_list, Login_user, Login_user_data, Product_list} from '../ActionTypes/ActionTypes';

export const addItemtoKart = data => ({
  type: Add_Item,
  payload: data,
});
export const RemoveItemtoKart = index => ({
  type: Delete_item,
  payload: index,
});
export const ProductlistItems = data => ({
  type: Product_list,
  payload: data,
});

export const AddlistItems = item => ({
  type: Add_Item_list,
  payload: item,
});

export const RemovelistItems = index => ({
  type: Delete_item_list,
  payload: index,
});

export const userLogin = user => ({
  type: Login_user,
  payload: user,
});

export const userLogindata = user => ({
  type: Login_user_data,
  payload: user,
});
