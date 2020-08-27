import { 
    ADD_STOCK_SUCCESS,
    ADD_STOCK_FAIL,
    GET_STOCKS,
    GET_STOCKS_FAIL,
    GET_STOCK,
    GET_STOCK_FAIL,
    UPDATE_SUCCESS,
    UPDATE_FAIL
} from './types';

import axios from 'axios';

// ADD SCHEDULE
export const addStock = (stockdata) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const body = stockdata;

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .post('http://localhost:8000/stocks', body, config)
        .then(res => {
            dispatch({
                type: ADD_STOCK_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_STOCK_FAIL,
                payload: err.response
            })
        })

}


// GET STOCKS
export const getStocksAll = () => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .get('http://localhost:8000/stocks', config)
        .then(res => {
            dispatch({
                type: GET_STOCKS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_STOCKS_FAIL,
                payload: err.response
            })
        })
}


export const getStock = (stockid) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .get(`http://localhost:8000/stocks/${stockid}`, config)
        .then(res => {

            localStorage.setItem('stockinfo', JSON.stringify(res.data));

            dispatch({
                type: GET_STOCK,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_STOCK_FAIL,
                payload: err.response
            })
        });
}


// UPDATE STOCK

export const updateStock = (stockData, id) => async(dispatch) => {

    const token = localStorage.getItem("token");

    const body = stockData; //JSON.stringify(userData);

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+token
        }
    };

    await axios
        .patch(`http://localhost:8000/stocks/${id}`, body, config)
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

