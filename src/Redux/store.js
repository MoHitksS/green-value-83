// import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import thunk from "redux-thunk";
// import {reducer as AppReducer} from './App/reducer';
// import {reducer as AuthReducer} from './Auth/reducer'


// const combineReducer = combineReducers({AppReducer,AuthReducer})
// export const store  = legacy_createStore(combineReducer,applyMiddleware(thunk))



import { reducer as AppReducer } from "./App/reducer";
import { reducer as AuthReducer } from "./Auth/reducer";
import thunk from "redux-thunk"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

const rootreducer=combineReducers({ AppReducer, AuthReducer });

const store = legacy_createStore(rootreducer ,applyMiddleware(thunk) );

export {store} ;