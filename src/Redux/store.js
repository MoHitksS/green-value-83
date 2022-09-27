import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as AppReducer} from './App/reducer';
import {reducer as AuthReducer} from './Auth/reducer'

const combineReducer = combineReducers({AppReducer,AuthReducer})
export const store  = legacy_createStore(combineReducer,applyMiddleware(thunk))