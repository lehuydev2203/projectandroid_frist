import {createStore,applyMiddleware, combineReducers} from 'redux';
import {numberReducer,errorreducer} from '../reducer/index';
const reducers=combineReducers({ number:numberReducer , err:errorreducer });
const store = createStore(reducers,applyMiddleware(thunk,logger,checkinZero));

export default store;