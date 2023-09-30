import {
  Add_Item,
  Add_Item_list,
  Delete_item,
  Delete_item_list,
  Login_user,
  Product_list,
} from '../ActionTypes/ActionTypes';

export const Reducers = (state = [], action) => {
  // console.log('Add kart action', action.payload);
  switch (action.type) {
    case Add_Item:
      return [...state, action.payload];

    case Delete_item:
      const Deletearry = state.filter((item, index) => {
        return index !== action.payload;
      });
      return Deletearry;

    default:
      return state;
  }
};

export const ListReducers = (state = [], action) => {
  // console.log('add list item action', action.payload);
  switch (action.type) {
    case Product_list:
      return action.payload;

    case Add_Item_list:
      return [...state, action.payload];

    case Delete_item_list:
      const Deletearry = state.filter((item, index) => {
        return index !== action.payload;
      });
      return Deletearry;

    default:
      return state;
  }
};

export const LoginReducers = (state = [], action) => {
  // console.log('action', action);
  switch (action.type) {
    case Login_user:
      return [...state, action.payload];

    default:
      return state;
  }
};

export const LoginUserdataReducers = (state = {}, action) => {
  // console.log('action', action);
  switch (action.type) {
    case Login_user:
      return action.payload;

    default:
      return state;
  }
};
