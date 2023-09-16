import {ListReducers, Reducers,LoginReducers} from '../../Redux/reducer/Reducers';
const {createStore, combineReducers} = require('redux');

const routReducers = combineReducers({
    ListReducers,
    Reducers,
    LoginReducers
})
export const mystore = createStore(routReducers);
