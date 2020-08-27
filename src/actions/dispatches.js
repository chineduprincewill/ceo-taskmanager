import { 
    ADD_DISPATCH_SUCCESS,
    ADD_DISPATCH_FAIL,
    LIST_DISPATCH,
    LIST_DISPATCH_FAIL
} from './types';

import axios from 'axios';

// ADD DISPATCH
export const addDispatch = (dispatchdt) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const body = dispatchdt;

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .post('http://localhost:8000/dispatches', body, config)
        .then(res => {
            dispatch({
                type: ADD_DISPATCH_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_DISPATCH_FAIL,
                payload: err.response
            })
        })

}


// DISPATCH HISTORY

export const listDispatch = (stockid) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .get(`http://localhost:8000/dispatches/${stockid}`, config)
        .then(res => {

            localStorage.setItem('dispatchinfo', JSON.stringify(res.data));

            dispatch({
                type: LIST_DISPATCH,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LIST_DISPATCH_FAIL,
                payload: err.response
            })
        });
}

