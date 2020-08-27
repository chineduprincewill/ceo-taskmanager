import {
    ADD_LOCATION_SUCCESS,
    ADD_LOCATION_FAIL,
    GET_LOCATIONS,
    GET_LOCATIONS_FAIL,
    GET_LOCATION,
    GET_LOCATION_FAIL,
    UPDATE_SUCCESS,
    UPDATE_FAIL,
    DELETE_LOCATION
} from '../actions/types';

const initialState = {
    isAdded: false,
    locations: [],
    location: {},
    error: [],
    updateMsg: ''
}

export default function (state = initialState, action) {
    switch(action.type){
        case ADD_LOCATION_SUCCESS:
            return{
                ...state,
                isAdded: true
            }
        case ADD_LOCATION_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_LOCATIONS:
            return {
                ...state,
                isAdded: false,
                locations: action.payload
            }
        case GET_LOCATIONS_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case GET_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case GET_LOCATION_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_SUCCESS:
            return{
                ...state,
                updateMsg: 'Location update succesful!'
            }
        case UPDATE_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case DELETE_LOCATION:
            return {
                ...state,
                locations: state.locations.filter(location => location._id !== action.payload)
            };
        default:
            return state
    }
}