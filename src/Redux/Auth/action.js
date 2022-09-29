
import * as types from "./actiontype";
import axios from "axios";

const login=(payload)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_REQUEST});
    return axios
        .post("https://reqres.in/api/login", payload)
        .then((r)=>{
            // return {name : "Masai School"}
            return dispatch({
                type: types.USER_LOGIN_SUCCESS,
                 payload: r.data.token
                });
            })
        .catch((e)=>
        dispatch({type:types.USER_LOGIN_FAILUARE, payload:e })
        );
}
export {login};

// const AddProducts=(payload)=>(dispatch)=>{
//     dispatch({type:types.ADD_PRODUCT_REQUEST})
//     return axios.post("http://localhost:8080/products",payload)
//     .then((res)=>{
//         dispatch({type:types.ADD_PRODUCT_SUCCESS})
//     }).catch(()=>{
//         dispatch({type:types.ADD_PRODUCT_FAILURE})
//     })
//  }