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
} from './types';

import axios from 'axios';

// ADD TASK
export const addProduct = (productdata) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const body = productdata;

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .post('http://localhost:8000/products', body, config)
        .then(res => {
            dispatch({
                type: ADD_PRODUCT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_PRODUCT_FAIL,
                payload: err.response
            })
        });
}

// FETCH ALL TASKS
export const fetchAllProducts = () => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .get('http://localhost:8000/products', config)
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_PRODUCTS_FAIL,
                payload: err.response
            })
        })
}


export const getProduct = (productid) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .get(`http://localhost:8000/products/${productid}`, config)
        .then(res => {

            localStorage.setItem('productinfo', JSON.stringify(res.data));

            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_PRODUCT_FAIL,
                payload: err.response
            })
        });
}


// UPDATE TASK
export const updateProduct = (productData, id) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const body = productData; //JSON.stringify(userData);

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .patch(`http://localhost:8000/products/${id}`, body, config)
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
export const deleteProduct = id => async(dispatch) => {

    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    await axios
      .delete(`http://localhost:8000/products/${id}`, config)
      .then(res => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: id
        });
      })
      .catch(err => console.log(err));
  };

