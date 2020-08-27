import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

class Roles extends Component {

    static propTypes = {
        user: PropTypes.object,
        logout: PropTypes.func
    }

    render() {

        const { user } = this.props;

        let userRole;

        if(user.role === 'admin'){
            userRole = <>
                <Link to="/locations" className="dropdown-item text-light mt-2">
                  <i className="fa fa-home mr-2"></i>  Locations
                </Link>
                <Link to="/tasks" className="dropdown-item text-light mt-2">
                  <i className="fa fa-tasks mr-2"></i>  Tasks
                </Link>
                <Link to="/schedules" className="dropdown-item text-light mt-2">
                  <i className="fa fa-calendar mr-2"></i>  Schedules
                </Link>
                <Link to="/users" className="dropdown-item text-light mt-2">
                  <i className="fa fa-users mr-2"></i>  Users
                </Link>
                <Link to="/stocks" className="dropdown-item text-light mt-2">
                  <i className="fa fa-home mr-2"></i>  Stock
                </Link>
            </>

        }

        else if(user.role === 'employee'){
            userRole = <div>
                <li className="nav-item">
                    <Link to="/articles"
                    className="btn btn-link btn-sm text-light mr-3 mt-1"
                    >
                        Articles
                    </Link>
            </li>
          </div>
        }

        return (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                  <Link to="/dashboard"
                  className="btn btn-link btn-sm text-light mr-3 mt-1"
                  >
                     <i className="fa fa-dashboard mr-1"></i> Dashboard 
                  </Link>
              </li>
              <div className="dropdown mr-3">
                <button className="btn btn-link text-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-cogs"></i>
                </button>
                <div className="dropdown-menu bg-success border-0" aria-labelledby="dropdownMenuButton">
                  <button className="btn btn-success btn-block border-bottom">{user.role}</button>
                  {userRole}
                  <span
                    onClick={this.props.logout}
                    className="dropdown-item text-light mt-2"
                  >
                    <i className="fa fa-power-off mr-2"></i> sign out
                  </span>
                </div>
              </div>
              <li className="nav-item">
                  <Link to="/dashboard"
                  className="btn btn-link btn-sm text-light mr-3 mt-1"
                  >
                     <i className="fa fa-user mr-1"></i> {user.firstname} 
                  </Link>
              </li>
          </ul>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, { logout })(Roles);
