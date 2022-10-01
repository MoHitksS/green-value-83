
import * as types from "./actionTypes";
import axios from "axios";



const Getlogin = () => (dispatch) => {
  dispatch({ type: types.GET_Login_REQUEST })
  return axios.get("https://zara-mock-server.herokuapp.com/users").then((res) => {
    dispatch({
      type: types.GET_Login_SUCCESS,
      payload: res.data
    })
  }).catch(() => {
    return dispatch({
      type: types.GET_Login_FAILURE
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
  Getlogin, AddData
}