import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/homeLogo.png'
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} width="150px" alt="CEO LOGO" />
            <div className="Home-caption p-3">Tasks Manager</div>
            <Link to="/login" className="btn btn-success mt-3"> Start managing your tasks <i className="fa fa-angle-double-right"></i> </Link>
          </div>
      </div>
    );
  }
}

export default Home;
