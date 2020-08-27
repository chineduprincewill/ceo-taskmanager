import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/homeLogo.png'

import { register } from '../actions/users';

class Register extends Component {

    state = {
        email: "",
        password: "",
        confirmPassword: "",
        mobile: "",
        lastname: "",
        firstname: "",
        role: "staff",
        pwdmismatch: ""
    }


    static propTypes = {
        isAdded: PropTypes.bool,
        error: PropTypes.array,
        register: PropTypes.func
    }

  onChange = e => this.setState({
    [e.target.name] : e.target.value
  });

  onSubmit = e => {
      e.preventDefault();

      if(this.state.password !== this.state.confirmPassword){
          this.setState({
              pwdmismatch: "password mismatch!"
          })
      }
      else{

        this.setState({
            pwdmismatch: ""
        })

        const userData = {
            email: this.state.email,
            password: this.state.password,
            mobile: this.state.mobile,
            lastname: this.state.lastname,
            firstname: this.state.firstname,
            role: this.state.role
        }
  
        this.props.register(userData);
        //console.log(userData);
      }
  }
  
  render() {

    if(this.props.isAdded){
        return <Redirect to="/login" />
    }

    const { error } = this.props;

    const { email, password, confirmPassword, mobile, lastname, firstname, pwdmismatch } = this.state;

    return (
      <div className="App">
        <div className="App-header">
                <div className="col-lg-5 col-md-6 col-sm-11 p-5">
                    <img src={logo} width="30px" alt="CEO LOGO" />
                    <p className="text text-danger text-center p-2">
                        {pwdmismatch}
                        { error.data ? error.data.message : ""}
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

                        <div className="form-group mt-4">
                            <input 
                                type="password"
                                name="confirmPassword" 
                                placeholder="Confirm password"
                                className="form-control" 
                                onChange={this.onChange} 
                                value={confirmPassword}
                                required
                            />
                        </div>
                        
                        <div className="form-group mt-4">
                            <input 
                                type="text"
                                name="mobile" 
                                placeholder="Enter mobile"
                                className="form-control" 
                                onChange={this.onChange} 
                                value={mobile}
                                required
                            />
                        </div>

                        <div className="form-group mt-4">
                            <input 
                                type="text"
                                name="lastname" 
                                placeholder="Enter Last name"
                                className="form-control" 
                                onChange={this.onChange} 
                                value={lastname}
                                required
                            />
                        </div>

                        <div className="form-group mt-4">
                            <input 
                                type="text"
                                name="firstname" 
                                placeholder="Enter First name"
                                className="form-control" 
                                onChange={this.onChange} 
                                value={firstname}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-success btn-block mt-4">Sign up</button>
                        </div>

                        <p className="text text-warning">
                            Already have an account? Click <Link to="/login">here</Link> to sign in
                        </p>
                    </form>
                </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    isAdded: state.users.isAdded,
    error: state.users.error
})

export default connect(mapStateToProps, { register })(Register);
