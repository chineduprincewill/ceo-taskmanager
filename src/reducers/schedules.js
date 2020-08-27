import {
    ADD_SCHEDULE_SUCCESS,
    ADD_SCHEDULE_FAIL,
    GET_SCHEDULES,
    GET_SCHEDULES_FAIL
} from '../actions/types';

const initialState = {
    isAdded: false,
    schedules: [],
    schedule: {},
    error: [],
    updateMsg: ''
}

export default function (state = initialState, action) {
    switch(action.type){
        case ADD_SCHEDULE_SUCCESS:
            return{
                ...state,
                isAdded: true
            }
        case ADD_SCHEDULE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_SCHEDULES:
            return {
                ...state,
                isAdded: false,
                schedules: action.payload
            }
        case GET_SCHEDULES_FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}