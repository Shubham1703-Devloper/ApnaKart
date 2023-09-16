import {Add_Item, Delete_item, Login_user, Product_list} from '../ActionTypes/ActionTypes';

export const Reducers = (state = [], action) => {
  console.log('action',action);
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
  console.log('action',action);
  switch (action.type) {
    case Product_list:
      return action.payload;
      
    default:
      return state;
  }
};

export const LoginReducers = (state = [], action) => {
  console.log('action',action);
  switch (action.type) {
    case Login_user:
      return [...state,action.payload];
      
    default:
      return state;
  }
};

