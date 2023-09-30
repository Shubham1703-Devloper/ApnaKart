import {ListReducers, Reducers,LoginReducers,LoginUserdataReducers} from '../../Redux/reducer/Reducers';
const {createStore, combineReducers} = require('redux');

const routReducers = combineReducers({
    ListReducers,
    Reducers,
    LoginReducers,
    LoginUserdataReducers
})
export const mystore = createStore(routReducers);
