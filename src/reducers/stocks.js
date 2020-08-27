import {
    ADD_STOCK_SUCCESS,
    ADD_STOCK_FAIL,
    GET_STOCKS,
    GET_STOCKS_FAIL,
    GET_STOCK,
    GET_STOCK_FAIL,
    UPDATE_SUCCESS,
    UPDATE_FAIL
} from '../actions/types';

const initialState = {
    isAdded: false,
    stocks: [],
    stock: {},
    error: [],
    updateMsg: ''
}

export default function (state = initialState, action) {
    switch(action.type){
        case ADD_STOCK_SUCCESS:
            return{
                ...state,
                isAdded: true
            }
        case ADD_STOCK_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_STOCKS:
            return{
                ...state,
                isAdded: false,
                stocks: action.payload
            }
        case GET_STOCKS_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case GET_STOCK:
            return {
                ...state,
                stock: action.payload
            }
        case GET_STOCK_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_SUCCESS:
            return{
                ...state,
                updateMsg: 'Stock update succesful!'
            }
        case UPDATE_FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}