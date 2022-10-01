import axios from "axios";
import * as types from "./actionTypes";
const getProduct = (payload) => (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    return axios
    .get(`https://zara-mock-server.herokuapp.com/${payload}`)
    .then((r)=>{
        dispatch({type: types.GET_PRODUCTS_SUCCESS, payload: r.data});
    })
    .catch((e)=>{
        dispatch({type: types.GET_PRODUCTS_FAILURE,payload: e});
    })
}
const getCart = () => (dispatch) => {
    dispatch({ type: types.GET_CART_REQUEST });
    return axios
    .post("https://zara-mock-server.herokuapp.com/cart")
    .then((r)=>{
        dispatch({type: types.GET_CART_SUCCESS, payload: r.data});
    })
    .catch((e)=>{
        dispatch({type: types.GET_PRODUCTS_FAILURE,payload: e});
    })
}

export {getProduct,getCart}