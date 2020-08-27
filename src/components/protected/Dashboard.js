import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Admin from '../protected/admin/Admin';


class Dashboard extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object
    }

  render() {

    let roleDashboard;

    if(this.props.user.role === 'admin'){
        roleDashboard = <Admin />;
    }
    else{
        roleDashboard = "";
    }

    return (   
        
        <div className="container">
            <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-dashboard mr-2"></i> <small>Dashboard</small>
            </h4>
            {roleDashboard}
        </div>
    );
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps)(Dashboard);
