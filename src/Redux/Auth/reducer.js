import * as types from "./actionTypes";

const initialState ={
    isAuth: false,
    token: '',
    isAuthLoging: false,
    isAuthError: false
}

const reducer = (oldstate = initialState, action)=>{
    const {type, payload} = action;
    switch(type){
        case types.GET_PRODUCTS_REQUEST:
            return{
                ...oldstate,
                isAuthLoading: false,
            };
        case types.GET_PRODUCTS_SUCCESS:
            return{
                ...oldstate,
                isAuthLoading:false,
                isAuth: true,
                token: payload,
            };
        case types.GET_PRODUCTS_FAILURE:
            return {
                ...oldstate,
                isAuthLoading: false,
                isAuthError: true,
                isAuth: false,
                token: "",
            };
            default:
                return oldstate;
    }
};
export { reducer}