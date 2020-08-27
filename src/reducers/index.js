import { combineReducers } from 'redux';
import users from './users';
import auth from './auth';
import locations from  './locations';
import tasks from './tasks';
import schedules from './schedules';
import stocks from './stocks';
import dispatches from './dispatches';
import products from './products';

export default combineReducers({
    users,
    auth,
    locations,
    tasks,
    schedules,
    stocks,
    dispatches,
    products
});