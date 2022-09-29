
import * as types from "./actionTypes";
import axios from "axios";



const GetProducts=()=>(dispatch)=>{
    dispatch({type:types.GET_PRODUCTS_REQUEST})
   return axios.get("  http://localhost:8080/products").
    then((res)=>{
      dispatch({
        type:types.GET_PRODUCTS_SUCCESS,
        payload:res.data
      })
    }).catch(()=>{
       return  dispatch({
             type:types.GET_PRODUCTS_FAILURE
        })
    })
}

const AddProducts=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_Signup_REQUEST})
    return axios.post("https://zara-mock-server.herokuapp.com/users",payload)
    .then((res)=>{
        dispatch({type:types.ADD_Signup_SUCCESS})
    }).catch(()=>{
        dispatch({type:types.ADD_Signup_FAILURE})
    })
 }

 export {
    GetProducts,AddProducts
  }