import * as types from "./actionTypes";

const initialState = {
  products: [],
  cart: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  const {type , payload} = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {...state, isLoading: true};

    case types.GET_PRODUCTS_SUCCESS:
      return {...state,isLoading:false, products: payload};

    case types.GET_PRODUCTS_FAILURE:
      return {...state, isLoading:false, isError: true} ;

    case types.ADD_To_CART:{
      return {...state, cart : [...state.cart,payload]}
    }

      default:
        return state;
  }

};
