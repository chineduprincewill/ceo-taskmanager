import { 
    ADD_TASK_SUCCESS,
    ADD_TASK_FAIL,
    GET_TASKS,
    GET_TASKS_FAIL,
    GET_TASK,
    GET_TASK_FAIL,
    UPDATE_SUCCESS,
    UPDATE_FAIL,
    DELETE_TASK
} from '../actions/types';

const initialState = {
    isAdded: false,
    tasks: [],
    task: {},
    error: [],
    updateMsg: ''
}

export default function (state = initialState, action) {
    switch(action.type){
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                isAdded: true
            }
        case ADD_TASK_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case GET_TASKS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_TASK:
            return {
                ...state,
                task: action.payload
            }
        case GET_TASK_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_SUCCESS:
            return{
                ...state,
                updateMsg: 'Task update succesful!'
            }
        case UPDATE_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload)
            };
        default:
            return state
    }
}