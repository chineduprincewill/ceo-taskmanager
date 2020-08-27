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
} from './types';

import axios from 'axios';

// ADD LOCATION
export const addLocation = (locationdata) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const body = locationdata;

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .post('http://localhost:8000/locations', body, config)
        .then(res => {
            dispatch({
                type: ADD_LOCATION_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_LOCATION_FAIL,
                payload: err.response
            })
        })

}


// GET LOCATIONS
export const getLocationsAll = () => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .get('http://localhost:8000/locations', config)
        .then(res => {
            dispatch({
                type: GET_LOCATIONS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_LOCATIONS_FAIL,
                payload: err.response
            })
        })
}


// DELETE USER
export const deleteLocation = id => async(dispatch) => {

    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    await axios
      .delete(`http://localhost:8000/locations/${id}`, config)
      .then(res => {
        dispatch({
          type: DELETE_LOCATION,
          payload: id
        });
      })
      .catch(err => console.log(err));
  };


  export const getLocation = (locationid) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .get(`http://localhost:8000/locations/${locationid}`, config)
        .then(res => {

            localStorage.setItem('locationinfo', JSON.stringify(res.data));

            dispatch({
                type: GET_LOCATION,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_LOCATION_FAIL,
                payload: err.response
            })
        });
}


// UPDATE LOCATION
export const updateLocation = (locationData, id) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const body = locationData; //JSON.stringify(userData);

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .patch(`http://localhost:8000/locations/${id}`, body, config)
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
