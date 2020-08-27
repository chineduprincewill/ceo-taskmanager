import { 
    ADD_SCHEDULE_SUCCESS,
    ADD_SCHEDULE_FAIL,
    GET_SCHEDULES,
    GET_SCHEDULES_FAIL
} from './types';

import axios from 'axios';

// ADD SCHEDULE
export const addSchedule = (scheduledata) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const body = scheduledata;

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .post('http://localhost:8000/schedules', body, config)
        .then(res => {
            dispatch({
                type: ADD_SCHEDULE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_SCHEDULE_FAIL,
                payload: err.response
            })
        })

}


// GET SCHEDULES
export const getSchedulesAll = () => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .get('http://localhost:8000/schedules', config)
        .then(res => {
            dispatch({
                type: GET_SCHEDULES,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_SCHEDULES_FAIL,
                payload: err.response
            })
        })
}

