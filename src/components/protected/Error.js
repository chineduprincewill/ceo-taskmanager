import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../App.css';
import error from '../../images/error.png';


class Error extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

  render() {

    let redirectBtn;

    if(this.props.isAuthenticated){
        redirectBtn = <Link to="/dashboard" className="btn btn-warning">Dashboard</Link>;
    }
    else{
        redirectBtn = <Link to="/login" className="btn btn-warning">Login</Link>;
    }

    return (
        <div className="App"> 
            <div className="Err-header">
                <span className="error text text-warning"><i>Oops!</i></span>
                <img src={error} width="300px" alt="ERROR" align="right"/>
                <h3 className="mt-3">Sorry! You cannot access this page.</h3>
                <div className="row mt-5">
                {redirectBtn}
                </div>
                
            </div>
        </div>
      );
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Error);
