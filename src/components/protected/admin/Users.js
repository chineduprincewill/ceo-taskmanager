import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { getAllUsers, getUser, deleteUser } from '../../../actions/users';
import { logout } from '../../../actions/auth';

import '../../../App.css';

class Users extends Component {

    static propTypes = {
        user: PropTypes.object,
        users: PropTypes.array,
        getAllUsers: PropTypes.func,
        deleteUser: PropTypes.func,
        getUser: PropTypes.func,
        logout: PropTypes.func
    }

    componentDidMount(){
        this.props.getAllUsers();
    }


    editUser = userid => {
        
        console.log(userid);
        this.props.getUser(userid);

        this.props.history.push('/edituser');
    }


  render() {

    const { user, users } = this.props;

    let usersList;

    if(user.role !== 'admin'){
        this.props.logout();
    }

    if(users){
        const data = Array.from(users);

            usersList = data.map(usr => (
                <tr key={usr._id}>                      
                    <td>{usr.lastname}</td>
                    <td>{usr.firstname}</td>
                    <td>{usr.email}</td>
                    <td>{usr.mobile}</td>
                    <td>{usr.role}</td>
                    <td>
                    <button
                        className="btn btn-link btn-sm"
                        onClick={this.editUser.bind(this, usr._id)}
                    >
                        <i className="fa fa-edit"></i>
                    </button>
                    <button
                        className="btn btn-link btn-sm text-danger"
                        onClick={this.props.deleteUser.bind(this, usr._id)}
                    >
                        <i className="fa fa-remove"></i>
                    </button>
                    </td>
                </tr>
                )
            )
    }

    return (
        <div className="container">
            <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-user mr-2"></i> <small>Users</small>
            </h4>

            <div className="row p-3 mt-3">
                <div className="col-12 m-auto">
                    <table className="table table-hover table-responsive borderless">
                        <tbody>
                            <tr className="text text-success">
                                <td>last name</td>
                                <td>first name</td>
                                <td>email</td>
                                <td>mobile</td>
                                <td>role</td>
                                <td />
                            </tr>
                            { usersList }
                        </tbody>
                    </table>
                </div>
                
            
            </div>
        </div>
    );
  }
}


const mapStateToProps = state => ({
    user: state.auth.user,
    users: state.users.users
});

export default connect(mapStateToProps, { getAllUsers, getUser, logout, deleteUser })(withRouter(Users));
