import {
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    GET_USERS, 
    GET_USERS_FAIL, 
    GET_USER, 
    GET_USER_FAILED,
    UPDATE_SUCCESS,
    UPDATE_FAIL,
    DELETE_USER
} from '../actions/types';

const initialState = {
    isAdded: false,
    users: [],
    user: {},
    error: [],
    updateMsg: ''
}

export default function (state=initialState, action){

    switch(action.type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAdded: true
            }
        case REGISTER_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }
        case GET_USERS_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case GET_USER:
            return{
                ...state,
                user: action.payload
            }
        case GET_USER_FAILED:
            return{
                ...state,
                error: action.payload
            }
        case UPDATE_SUCCESS:
            return{
                ...state,
                updateMsg: 'User update succesful!'
            }
        case UPDATE_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.payload)
            };
        default:
            return state
    }
}