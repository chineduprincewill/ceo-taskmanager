import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';

//import { addSchedule } from '../../../actions/schedule';
import { logout } from '../../../actions/auth';
import { getLocationsAll } from '../../../actions/locations';
import { getAllUsers } from '../../../actions/users';
import { addDispatch } from '../../../actions/dispatches';
import { updateStock } from '../../../actions/stocks';

export class DispatchItem extends Component {

    state = {
        item: '',
        batch: '',
        total: '',
        received: '',
        dispatched: '',
        balance: '',
        others: '',
        qtyout: '',
        staff: '',
        dispatchdate: Date.now(),
        location: '',
        isAdded: false
    }

    static propTypes = {

        user: PropTypes.object,
        addSchedule: PropTypes.func,
        locations: PropTypes.array,
        users: PropTypes.array,
        logout: PropTypes.func,
        getAllUsers: PropTypes.func,
        getLocationsAll: PropTypes.func,
        addDispatch: PropTypes.func,
        updateStock: PropTypes.func,
        isAdded: PropTypes.bool
    }


    componentDidMount(){

        let dispatchddata = {};

        if(localStorage && localStorage.getItem('stockinfo')){
            dispatchddata = JSON.parse(localStorage.getItem('stockinfo'));
        }

        this.setState({
            id: dispatchddata._id,
            item: dispatchddata.item,
            batch: dispatchddata.batch,
            total: dispatchddata.total,
            received: dispatchddata.received,
            dispatched: dispatchddata.dispatched,
            balance: dispatchddata.balance,
            others: dispatchddata.others

        });

        this.props.getAllUsers();
        this.props.getLocationsAll();

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

        if(this.state.qtyout > this.state.total){
            alert("Sorry! Qunatity requested for dispatch is greater than quantity in stock")
        }
        else{

            const newdispatched = parseInt(this.state.dispatched) + parseInt(this.state.qtyout);
            const newbalance = this.state.total - newdispatched;
            const id = this.state.id;

            const stockupdate = [
                {"propName": "item", "value": this.state.item},
                {"propName": "batch", "value": this.state.batch},
                {"propName": "total", "value": this.state.total},
                {"propName": "received", "value": this.state.received},
                {"propName": "dispatched", "value": newdispatched},
                {"propName": "balance", "value": newbalance},
                {"propName": "others", "value": this.state.others}
            ];

            const dispatchdetail = {
                stockid: id,
                item: this.state.item,
                batch: this.state.batch,
                quantity: this.state.qtyout,
                staff: this.state.staff,
                dispatchdt: this.toTimeStamp(this.state.dispatchdate),
                location: this.state.location
            }

            this.props.addDispatch(dispatchdetail);
            this.props.updateStock(stockupdate, id);

            this.setState({
                isAdded: true
            });

        }

    }


  render() {

    const { user, users, locations } = this.props;

    if(this.state.isAdded){
        return <Redirect to="/stocks" />
    }

    const { item, batch, qtyout, staff, dispatchdate, location } = this.state;

    if(user.role !== 'admin'){
            
        this.props.logout();
    }

    let locationsList;
    let usersList;

    const data = Array.from(locations);
    const data2 = Array.from(users);


    if(locations){
        locationsList = data.map((loc) => {
            return (                     
                <option key={loc._id} value={loc.address +' '+ loc.city +' '+ loc.state +' '+ loc.country}>{loc.address +' '+ loc.city +' '+ loc.state }</option>      
            )}
        )
    }

    if(users){
        usersList = data2.map((usr) => {
            return (                   
                <option key={usr._id} value={usr.lastname +' '+ usr.firstname}>{usr.lastname +' '+ usr.firstname}</option>  
            )}
        )
    }

    return (

        <div className="container">

            <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-calendar mr-2"></i> <small>Dispatch</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to='/stocks' className="btn btn-success text-light rounded-0 ml-auto">
                    <i className="fa fa-arrow-right mr-1"></i> Stock
                </Link>
            </div>

        <div className="row p-3 mt-3">
            <div className="col-3"></div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <i className="fa fa-edit fa-2x text-success"></i>
                <p className="text text-success text-center mt-2">
                </p>
                <form onSubmit={this.onSubmit} className="mt-3">

                    <h5 className="alert alert-success">{item} from Batch {batch}</h5>
                    <hr/>
                    
                    <div className="form-group mt-4">
                        <input 
                            type="text"
                            name="qtyout"
                            className="form-control"
                            placeholder="Enter quantity to be dispatched"
                            onChange={this.handleChange}
                            value={qtyout}
                            required
                        />
                    </div>

                    <div className="form-group mt-4">
                        <select 
                            name="staff"
                            placeholder="Select staff"
                            className="form-control"
                            onChange={this.handleChange}
                            value={staff}
                            required
                        >
                            <option value="">select dispatcher ...</option>
                            {usersList}
                        </select>
                    </div>

                    <div className="mt-4">
                        <Form.Group controlId="dispatchdate">
                            <Form.Label>select dispatch date</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="dispatchdate" 
                                placeholder="Dispatch date" 
                                onChange={this.handleChange}
                                value={dispatchdate}
                            />
                        </Form.Group>
                    </div>

                    <div className="form-group mt-4">
                        <select 
                            name="location"
                            placeholder="Select location"
                            className="form-control"
                            onChange={this.handleChange}
                            value={location}
                            required
                        >
                            <option value="">select dispatch location ...</option>
                            {locationsList}
                        </select>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block mt-4">Dispatch</button>
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
    users: state.users.users,
    locations: state.locations.locations,
    isAdded: state.dispatches.isAdded,
    error: state.schedules.error
});

export default connect(mapStateToProps, { logout, getAllUsers, getLocationsAll, addDispatch, updateStock })(DispatchItem);
