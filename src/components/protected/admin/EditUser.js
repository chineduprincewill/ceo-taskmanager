import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { updateUser } from '../../../actions/users';

class EditUser extends Component {

    state = {
        email: "",
        mobile: "",
        lastname: "",
        firstname: "",
        role: ""
    }


    static propTypes = {
        updateUser: PropTypes.func,
        update_msg: PropTypes.string
    }

    componentDidMount(){

        let userdata = {};

        if(localStorage && localStorage.getItem('userinfo')){
            userdata = JSON.parse(localStorage.getItem('userinfo'));
        }

        this.setState({

            id: userdata._id,
            email: userdata.email,
            mobile: userdata.mobile,
            lastname: userdata.lastname,
            firstname: userdata.firstname,
            role: userdata.role
        });

    }

    handleChange = e => this.setState({
        [e.target.name] : e.target.value
      });

    
    onSubmit = e => {
        e.preventDefault();
        
        const id = this.state.id;

        const userData = [
            {"propName": "email", "value": this.state.email},
            {"propName": "mobile", "value": this.state.mobile},
            {"propName": "lastname", "value": this.state.lastname},
            {"propName": "firstname", "value": this.state.firstname},
            {"propName": "role", "value": this.state.role}
        ];

        console.log(userData);

        this.props.updateUser(userData, id);
    }

  render() {

    const { id, email, mobile, lastname, firstname, role } = this.state;
    const { update_msg } = this.props;

    return (
      <div className="container">

            <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-user mr-2"></i> <small>Users</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to='/users' className="btn btn-success text-light rounded-0 ml-auto">
                    <i className="fa fa-arrow-right mr-1"></i> Users
                </Link>
            </div>

            <div className="row p-3 mt-3">
                <div className="col-3"></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <i className="fa fa-edit fa-2x text-success"></i>
                <p className="text text-success text-center mt-2">
                    { update_msg ? update_msg : ""}
                </p>
                    <form onSubmit={this.onSubmit} className="mt-3">
                        <div className="form-group">
                            <input
                                type="hidden"
                                name="id"
                                onChange={this.handleChange}
                                value={id}
                            />
                            <input 
                                type="email"
                                name="email" 
                                placeholder="Enter email"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={email}
                                required
                            />
                        </div>
                        
                        <div className="form-group mt-4">
                            <input 
                                type="text"
                                name="mobile" 
                                placeholder="Enter mobile"
                                className="form-control" 
                                onChange={this.handleChange} 
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
                                onChange={this.handleChange} 
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
                                onChange={this.handleChange} 
                                value={firstname}
                                required
                            />
                        </div>

                        <div className="form-group mt-4">
                            <select 
                                name="role"
                                placeholder="Select role"
                                className="form-control"
                                onChange={this.handleChange}
                                value={role}
                                required
                            >
                                <option value={role}>{role}</option>
                                <option value="admin">admin</option>
                                <option value="staff">staff</option>
                                <option value="stock">stock</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-success btn-block mt-4">Update</button>
                        </div>
                    </form>
                </div>
                <div className="col-3"></div>
            </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
    update_msg: state.users.updateMsg
})

export default connect(mapStateToProps, { updateUser })(EditUser);
