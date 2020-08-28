import React from 'react';
import { HashRouter as Router,  Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import configureStore from './configureStore';

import PrivateRoute from './components/protected/PrivateRoute';
import AdminRoute from './components/protected/AdminRoute';
import StockRoute from './components/protected/StockRoute';
import Header from './components/common/Header';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/protected/Dashboard';

import Users from './components/protected/admin/Users';
import Locations from './components/protected/admin/Locations';
import Tasks from './components/protected/admin/Tasks';
import Schedules from './components/protected/admin/Schedules';
import EditUser from './components/protected/admin/EditUser';
import AddLocation from './components/protected/admin/AddLocation';
import EditLocation from './components/protected/admin/EditLocation';
import AddTask from './components/protected/admin/AddTask';
import EditTask from './components/protected/admin/EditTask';
import ScheduleJob from './components/protected/admin/ScheduleJob';
import AddStock from './components/protected/admin/AddStock';
import Stocks from './components/protected/admin/Stocks';
import DispatchItem from './components/protected/admin/DispatchItem';
import DispatchList from './components/protected/admin/DispatchList';
import Products from './components/protected/admin/Products';
import AddProduct from './components/protected/admin/AddProduct';
import EditProduct from './components/protected/admin/EditProduct';
import Error from './components/protected/Error';


const store = configureStore()

function App() {

  return (
    <Provider store = {store}>
      <Router>
          <Header />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/error" component={Error} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/users" component={Users} />
              <PrivateRoute path="/locations" component={Locations} />
              <PrivateRoute path="/tasks" component={Tasks} />
              <PrivateRoute path="/schedules" component={Schedules} />
              <AdminRoute path="/edituser" component={EditUser} />
              <StockRoute path="/addlocation" component={AddLocation} />
              <StockRoute path="/editlocation" component={EditLocation} />
              <AdminRoute path="/addtask" component={AddTask} />
              <AdminRoute path="/edittask" component={EditTask} />
              <AdminRoute path="/schedule-job" component={ScheduleJob} />
              <StockRoute path="/add-stock" component={AddStock} />
              <PrivateRoute path="/stocks" component={Stocks} />
              <StockRoute path="/dispatch-item" component={DispatchItem} />
              <PrivateRoute path="/dispatch-list" component={DispatchList} />
              <PrivateRoute path="/products" component={Products} />
              <StockRoute path="/addproduct" component={AddProduct} />
              <StockRoute path="/editProduct" component={EditProduct} />
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
