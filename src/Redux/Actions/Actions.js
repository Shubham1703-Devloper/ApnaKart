import {Add_Item, Delete_item, Login_user, Product_list} from '../ActionTypes/ActionTypes';

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

export const userLogin = user => ({
  type: Login_user,
  payload: user,
});

