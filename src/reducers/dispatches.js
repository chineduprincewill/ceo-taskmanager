import {
    ADD_DISPATCH_SUCCESS,
    ADD_DISPATCH_FAIL,
    LIST_DISPATCH,
    LIST_DISPATCH_FAIL
} from '../actions/types';

const initialState = {
    isAdded: false,
    dispatches: [],
    dispatch: {},
    error: [],
    updateMsg: ''
}

export default function (state = initialState, action) {
    switch(action.type){
        case ADD_DISPATCH_SUCCESS:
            return{
                ...state,
                isAdded: true
            }
        case ADD_DISPATCH_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case LIST_DISPATCH:
            return {
                ...state,
                dispatches: action.payload
            }
        case LIST_DISPATCH_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}