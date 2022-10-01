
import * as types from "./actionTypes";
import axios from "axios";



const GetProducts = () => (dispatch) => {
  dispatch({ type: types.ADD_Signup_REQUEST })
  return axios.get("  http://localhost:8080/products").then((res) => {
    dispatch({
      type: types.ADD_Signup_SUCCESS,
      payload: res.data
    })
  }).catch(() => {
    return dispatch({
      type: types.ADD_Signup_FAILURE
    })
  })
}

const AddData = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_Signup_REQUEST })
  return axios.post("https://zara-mock-server.herokuapp.com/users", payload)
    .then((res) => {
      dispatch({ type: types.ADD_Signup_SUCCESS })
    }).catch(() => {
      dispatch({ type: types.ADD_Signup_FAILURE })
    })
}

export {
  GetProducts, AddData
}