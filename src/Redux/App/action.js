import axios from "axios";
import * as types from "./actionTypes";
const getProduct = (payload)=>(dispatch)=>{
    dispatch({type: types.GET_PRODUCTS_REQUEST});
    return axios
    .get(`https://zara-mock-server.herokuapp.com/${payload}`)
    .then((r)=>{
        dispatch({type: types.GET_PRODUCTS_SUCCESS, payload: r.data});
    })
    .catch((e)=>{
        dispatch({type: types.GET_PRODUCTS_FAILURE,payload: e});
    })
}
const setCart = (payload,id) =>{
    return{
        type:types.ADD_To_CART,
        payload,
        id
    }
}
export {getProduct,setCart}