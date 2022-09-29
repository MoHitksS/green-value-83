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
        case types.USER_LOGIN_REQUEST:
            return{
                ...oldstate,
                isAuthLoading: false,
            };
        case types.USER_LOGIN_SUCCESS:
            return{
                ...oldstate,
                isAuthLoading:false,
                isAuth: true,
                token: payload,
            };
        case types.USER_LOGIN_FAILUARE:
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