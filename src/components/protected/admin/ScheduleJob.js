import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import { addSchedule } from '../../../actions/schedule';
import { logout } from '../../../actions/auth';

export class ScheduleJob extends Component {

    state = {
        description: "",
        location: "",
        from: "",
        to: ""
    }

    static propTypes = {

        user: PropTypes.object,
        addSchedule: PropTypes.func,
        logout: PropTypes.func
    }


    componentDidMount(){

        let locationdata = {};

        if(localStorage && localStorage.getItem('locationinfo')){
            locationdata = JSON.parse(localStorage.getItem('locationinfo'));
        }

        this.setState({

            location: locationdata.address + ' ' + locationdata.city + ' ' + locationdata.state + ' ' + locationdata.country

        });

    }

    toTimeStamp = (strDate) => {
        var datum = Date.parse(strDate);
        return datum/1000;
    }


    handleChange = e => this.setState({
        [e.target.name] : e.target.value
      });


    onSubmit = e => {
        e.preventDefault();

        const dateFrom  = this.toTimeStamp(this.state.from);
        const dateTo = this.toTimeStamp(this.state.to);

        const schData = {  
            description: this.state.description,
            location: this.state.location,
            from: dateFrom,
            to: dateTo
        }

        this.props.addSchedule(schData);
    }


  render() {

    const { user } = this.props;

    const { description, location, from, to } = this.state;

    if(user.role !== 'admin'){
            
        this.props.logout();
    }


    return (

        <div className="container">

            <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-calendar mr-2"></i> <small>Schedule Job</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to='/locations' className="btn btn-success text-light rounded-0 ml-auto">
                    <i className="fa fa-arrow-right mr-1"></i> Schedules
                </Link>
            </div>

        <div className="row p-3 mt-3">
            <div className="col-3"></div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <i className="fa fa-edit fa-2x text-success"></i>
                <p className="text text-success text-center mt-2">
                </p>
                <form onSubmit={this.onSubmit} className="mt-3">
                    
                    <div className="form-group mt-4">
                        <textarea 
                            name="description"
                            className="form-control"
                            placeholder="Enter job description"
                            onChange={this.handleChange}
                            value={description}
                            required
                        >
                        </textarea>
                    </div>

                    <div className="form-group mt-4">
                        <textarea 
                            name="location"
                            className="form-control"
                            placeholder="Enter job location"
                            onChange={this.handleChange}
                            value={location}
                            required
                        >
                        </textarea>
                    </div>

                    <div className="mt-4">
                        <Form.Group controlId="from">
                            <Form.Label>From</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="from" 
                                placeholder="Start date" 
                                onChange={this.handleChange}
                                value={from}
                            />
                        </Form.Group>
                    </div>

                    <div className="mt-4">
                        <Form.Group controlId="to">
                            <Form.Label>To</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="to" 
                                placeholder="End date" 
                                onChange={this.handleChange}
                                value={to}
                            />
                        </Form.Group>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block mt-4">Create Schedule</button>
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
    error: state.schedules.error
});

export default connect(mapStateToProps, { logout, addSchedule })(ScheduleJob);
