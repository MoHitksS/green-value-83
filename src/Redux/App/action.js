import axios from "axios";
import * as types from "./actionTypes";
const getProduct = ()=>(dispatch)=>{
    dispatch({type: types.GET_PRODUCTS_REQUEST});
    return axios
    .get("http://localhost:3004/men1")
    .then((r)=>{
        dispatch({type: types.GET_PRODUCTS_SUCCESS, payload: r.data});
    })
    .catch((e)=>{
        dispatch({type: types.GET_PRODUCTS_FAILURE,payload: e});
    })
}

export {getProduct}