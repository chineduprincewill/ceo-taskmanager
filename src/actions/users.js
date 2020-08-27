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
} from './types';

import axios from 'axios';

export const register = (userdata) => async(dispatch) => {

    const body = JSON.stringify(userdata);

    // Headers
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    };

    await axios
        .post('http://localhost:8000/users/signup', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response
            })
        });
}


// GET ALL USERS
export const getAllUsers = () => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .get('http://localhost:8000/users', config)
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_USERS_FAIL,
                payload: err.response
            })
        });
}


// GET INDIVIDUAL USER
export const getUser = (userid) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .get(`http://localhost:8000/users/${userid}`, config)
        .then(res => {

            localStorage.setItem('userinfo', JSON.stringify(res.data));

            dispatch({
                type: GET_USER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_USER_FAILED,
                payload: err.response
            })
        });
}


// UPDATE USER
export const updateUser = (userData, id) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const body = userData; //JSON.stringify(userData);

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .patch(`http://localhost:8000/users/${id}`, body, config)
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


// DELETE USER
export const deleteUser = id => async(dispatch) => {

    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    await axios
      .delete(`http://localhost:8000/users/${id}`, config)
      .then(res => {
        dispatch({
          type: DELETE_USER,
          payload: id
        });
      })
      .catch(err => console.log(err));
  };