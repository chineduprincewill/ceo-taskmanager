import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getLocationsAll, deleteLocation, getLocation } from '../../../actions/locations';

import { logout } from '../../../actions/auth';

class Locations extends Component {

    static propTypes = {
        user: PropTypes.object,
        logout: PropTypes.func,
        isAdded: PropTypes.bool,
        locations: PropTypes.array,
        error: PropTypes.array,
        getLocationsAll: PropTypes.func,
        deleteLocation: PropTypes.func,
        getLocation: PropTypes.func
    }

    componentDidMount(){

        this.props.getLocationsAll();
    }


    editLocation = userid => {
        
       // console.log(userid);
        this.props.getLocation(userid);

        this.props.history.push('/editLocation');
    }


    schedule = locationid => {

        this.props.getLocation(locationid);

        this.props.history.push('/schedule-job');
    }


  render() {

    const { locations } = this.props;

    let locationsList;

    if(locations){
        const data = Array.from(locations);

            locationsList = data.map(loc => (
                <tr key={loc._id}>                      
                    <td>{loc.address}</td>
                    <td>{loc.city}</td>
                    <td>{loc.state}</td>
                    <td>{loc.country}</td>
                    <td>
                    <button
                        className="btn btn-link btn-sm"
                        onClick={this.editLocation.bind(this, loc._id)}
                    >
                        <i className="fa fa-edit"></i>
                    </button>
                    <button
                        className="btn btn-link btn-sm text-danger"
                        onClick={this.props.deleteLocation.bind(this, loc._id)}
                    >
                        <i className="fa fa-remove"></i>
                    </button>
                    <button
                        className="btn btn-link btn-sm text-success"
                        onClick={this.schedule.bind(this, loc._id)}
                        title="schedule tasks"
                    >
                        <i className="fa fa-calendar"></i>
                    </button>
                    </td>
                </tr>
                )
            )
    }
    
    return (
        <div className="container">
            <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-home mr-2"></i> <small>Locations</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to="/addlocation" className="btn btn-link text-success rounded-0 ml-auto">
                    <i className="fa fa-plus mr-1"></i> Location
                </Link>
            </div>

            <div className="row p-3 mt-3">
                <div className="col-12 m-auto">
                    <table className="table table-hover table-responsive borderless">
                        <tbody>
                            <tr className="text text-success">
                                <td>address</td>
                                <td>city</td>
                                <td>state</td>
                                <td>country</td>
                                <td />
                            </tr>
                            { locationsList }
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
    isAdded: state.locations.isAdded,
    locations: state.locations.locations,
    error: state.locations.error
});

export default connect(mapStateToProps, { logout, getLocationsAll, deleteLocation, getLocation })(withRouter(Locations));
