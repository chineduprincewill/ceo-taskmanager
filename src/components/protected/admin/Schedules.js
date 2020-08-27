import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getSchedulesAll } from '../../../actions/schedule';
import { logout } from '../../../actions/auth';

class Schedules extends Component {

    static propTypes = {
        user: PropTypes.object,
        logout: PropTypes.func,
        schedules: PropTypes.array,
        error: PropTypes.array,
        getSchedulesAll: PropTypes.func
    }

    componentDidMount(){

        this.props.getSchedulesAll();
    }

  render() {

    const { user, schedules } = this.props;

    let schedulesList;

    if(user.role !== 'admin'){
            
        this.props.logout();
    }


    if(schedules){
        const data = Array.from(schedules);

        schedulesList = data.map(sch => (
                <tr key={sch._id}>                      
                    <td>{sch.description}</td>
                    <td>{sch.location}</td>
                    <td>{sch.from}</td>
                    <td>{sch.to}</td>
                    <td>
                    <button
                        className="btn btn-link btn-sm"
                    >
                        <i className="fa fa-edit"></i>
                    </button>
                    <button
                        className="btn btn-link btn-sm text-danger"
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
                <i className="fa fa-calendar mr-2"></i> <small>Schedules</small>
            </h4>

            <div className="row pr-3 mt-3">
                <button className="btn btn-link text-success rounded-0 ml-auto">
                    <i className="fa fa-plus mr-1"></i> Schedule
                </button>
            </div>

            <div className="row p-3 mt-3">
                <div className="col-12 m-auto">
                    <table className="table table-hover table-responsive borderless">
                        <tbody>
                            <tr className="text text-success">
                                <td>description</td>
                                <td>location</td>
                                <td>from</td>
                                <td>to</td>
                                <td />
                            </tr>
                            { schedulesList }
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    schedules: state.schedules.schedules,
    error: state.schedules.error
});

export default connect(mapStateToProps, { logout, getSchedulesAll })(Schedules);
