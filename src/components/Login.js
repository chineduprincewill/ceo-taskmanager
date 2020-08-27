import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/homeLogo.png'

import { login } from '../actions/auth';

class Login extends Component {

    state = {
        email: "",
        password: ""
    }


    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object,
        error: PropTypes.object,
        login: PropTypes.func
    }

  onChange = e => this.setState({
    [e.target.name] : e.target.value
  });

  onSubmit = e => {
      e.preventDefault();

      const authData = {
          email: this.state.email,
          password: this.state.password
      }

      this.props.login(authData);
      console.log(authData);
  }
  
  render() {

    if(this.props.isAuthenticated){
        return <Redirect to="/dashboard" />
    }

    const { email, password} = this.state;
    const { error } = this.props;

    return (
      <div className="App">
        <div className="App-header">
                <div className="col-lg-5 col-md-6 col-sm-11 p-5">
                    <img src={logo} width="30px" alt="CEO LOGO" />
                    <p className="text text-danger text-center p-2">
                        { error ? error.message : ""}
                    </p>
                    <form onSubmit={this.onSubmit} className="mt-3">
                        <div className="form-group">
                            <input 
                                type="email"
                                name="email" 
                                placeholder="Enter email"
                                className="form-control" 
                                onChange={this.onChange} 
                                value={email}
                                required
                            />
                        </div>

                        <div className="form-group mt-4">
                            <input 
                                type="password"
                                name="password" 
                                placeholder="Enter password"
                                className="form-control" 
                                onChange={this.onChange} 
                                value={password}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-success btn-block mt-4">Sign in</button>
                        </div>

                        <p className="text text-warning">
                            Don't have an account yet? Click <Link to="/register">here</Link> to sign up
                        </p>
                    </form>
                </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.auth.error
})

export default connect(mapStateToProps, { login })(Login);
