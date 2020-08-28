import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logout } from '../../../actions/auth';
import { addLocation } from '../../../actions/locations';

import data from '../../../utilities/state.json';

class AddLocation extends Component {

    state = {
        address: '',
        city: '',
        state: '',
        country: ''
    }

    static propTypes = {
        user: PropTypes.object,
        logout: PropTypes.func,
        isAdded: PropTypes.bool,
        addLocation: PropTypes.func
    }


    handleChange = e => this.setState({
        [e.target.name] : e.target.value
      });

    
    onSubmit = e => {
        e.preventDefault();

        const locationdata = {
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country
        }

        console.log(locationdata);

        this.props.addLocation(locationdata);
    }


  render() {
    
    const { isAdded } = this.props;

    if(isAdded){
        return <Redirect to="/locations" />
    }

    const { address, city, state, country } = this.state;

    const listStates = data.map( (data) => {
        return (
            <option key={data.state.id} value={data.state.name}>
                {data.state.name}
            </option>
        )
    }) 

    return (
      <div className="container">
          <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-home mr-2"></i> <small>Locations</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to='/locations' className="btn btn-link text-success rounded-0 ml-auto">
                    <i className="fa fa-arrow-right mr-1"></i> Locations
                </Link>
            </div>

            <div className="row p-3 mt-3">
                <div className="col-3"></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <i className="fa fa-plus fa-2x text-success"></i>
                    <p className="text text-success text-center mt-2">
                        
                    </p>
                    <form onSubmit={this.onSubmit} className="mt-3">
                        <div className="form-group">
                            <input 
                                type="text"
                                name="address" 
                                placeholder="Enter address"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={address}
                                required
                            />
                        </div>
                        
                        <div className="form-group mt-4">
                            <input 
                                type="text"
                                name="city" 
                                placeholder="Enter city"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={city}
                                required
                            />
                        </div>

                        <div className="form-group mt-4">
                            <select 
                                name="state"
                                placeholder="Select state"
                                className="form-control"
                                onChange={this.handleChange}
                                value={state}
                                required
                            >
                                <option value="">select state ...</option>
                                {listStates}
                            </select>
                        </div>

                        <div className="form-group mt-4">
                            <select 
                                name="country"
                                placeholder="Select country"
                                className="form-control"
                                onChange={this.handleChange}
                                value={country}
                                required
                            >
                                <option value="">select country ...</option>
                                <option value="Nigeria">Nigeria</option>
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
    user: state.auth.user,
    isAdded: state.locations.isAdded,
    error: state.locations.error
});

export default connect(mapStateToProps, { logout, addLocation })(AddLocation);
