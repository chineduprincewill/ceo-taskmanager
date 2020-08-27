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
} from './types';

import axios from 'axios';

// ADD TASK
export const addTask = (taskdata) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const body = taskdata;

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .post('http://localhost:8000/tasks', body, config)
        .then(res => {
            dispatch({
                type: ADD_TASK_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_TASK_FAIL,
                payload: err.response
            })
        });
}

// FETCH ALL TASKS
export const fetchAllTasks = () => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .get('http://localhost:8000/tasks', config)
        .then(res => {
            dispatch({
                type: GET_TASKS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_TASKS_FAIL,
                payload: err.response
            })
        })
}


export const getTask = (taskid) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .get(`http://localhost:8000/tasks/${taskid}`, config)
        .then(res => {

            localStorage.setItem('taskinfo', JSON.stringify(res.data));

            dispatch({
                type: GET_TASK,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_TASK_FAIL,
                payload: err.response
            })
        });
}


// UPDATE TASK
export const updateTask = (taskData, id) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const body = taskData; //JSON.stringify(userData);

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .patch(`http://localhost:8000/tasks/${id}`, body, config)
        .then(res => {
            dispatch({
                type: UPDATE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_FAIL,
                payload: err.response
            })
        })
}


// DELETE TASK
export const deleteTask = id => async(dispatch) => {

    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    await axios
      .delete(`http://localhost:8000/tasks/${id}`, config)
      .then(res => {
        dispatch({
          type: DELETE_TASK,
          payload: id
        });
      })
      .catch(err => console.log(err));
  };

