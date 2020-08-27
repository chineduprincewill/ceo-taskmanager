import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from  '../actions/types';

const initialState = {
    //token: localStorage.getItem("token"),
    isAuthenticated : false,
    user : {},
    error : {}
}

export default function (state = initialState, action) {
    switch(action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token");
            return{
                ...state,
                token: null,
                user: {},
                isAuthenticated: false
            }
        default:
            return state
    }

}
