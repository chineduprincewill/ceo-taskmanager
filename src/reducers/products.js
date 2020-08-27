import { 
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    GET_PRODUCTS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCT,
    GET_PRODUCT_FAIL,
    UPDATE_SUCCESS,
    UPDATE_FAIL,
    DELETE_PRODUCT
} from '../actions/types';

const initialState = {
    isAdded: false,
    products: [],
    product: {},
    error: [],
    updateMsg: ''
}

export default function (state = initialState, action) {
    switch(action.type){
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                isAdded: true
            }
        case ADD_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_SUCCESS:
            return{
                ...state,
                updateMsg: 'Product update succesful!'
            }
        case UPDATE_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload)
            };
        default:
            return state
    }
}