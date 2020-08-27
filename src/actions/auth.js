import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from './types';
import axios from 'axios';

export const login = (authdata) => async(dispatch) => {

    const body = authdata; //JSON.stringify(authdata);

    const config = {
        header: {
            "Content-Type": "application/json"
        }
    };

    await axios
        .post('http://localhost:8000/users/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response
            })
        });
}


// LOGOUT USER
export const logout = () => dispatch => {

    dispatch({
        type: LOGOUT_SUCCESS,
        payload: "Successfully logged out!"
      });
  };