import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { logout } from '../../../actions/auth';

export class DispatchList extends Component {

    state = {
        dispatchArr: []
    }

    static propTypes = {

        user: PropTypes.object,
        dispatches: PropTypes.array,
        logout: PropTypes.func
    }


    componentDidMount(){

        let dispatchddata = [];

        if(localStorage && localStorage.getItem('dispatchinfo')){
            dispatchddata = JSON.parse(localStorage.getItem('dispatchinfo'));
        }

        this.setState({
            dispatchArr : dispatchddata
        });

    }


    render(){

        const { user } = this.props;

        const { dispatchArr } = this.state;

        if(user.role !== 'admin'){
                
            this.props.logout();
        }

        let dispatchList;

        const data = Array.from(dispatchArr);

        if(dispatchArr){
            dispatchList = data.map((dsp) => {
                return (                     
                    <div className="row p-1 border-bottom">
                        <table className="table table-hover table-responsive borderless">
                            <tbody>
                                <tr>
                                    <td colSpan="2">{dsp.staff.toUpperCase()}</td>
                                </tr>
                                <tr><td>DISPATCHED</td><td>{dsp.quantity} {dsp.item}</td></tr>
                                <tr><td>FROM</td><td>Batch {dsp.batch}</td></tr>
                                <tr><td>TO</td><td>{dsp.location}</td></tr>
                                <tr><td>ON</td><td>{dsp.dispatchdt}</td></tr>
                                <tr><td></td><td></td></tr>
                            </tbody>
                        </table>
                    </div>
                )}
            )
        }

        return(

        <div className="container">

            <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-calendar mr-2"></i> <small>Dispatch history</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to='/stocks' className="btn btn-success text-light rounded-0 ml-auto">
                    <i className="fa fa-arrow-right mr-1"></i> Stock
                </Link>
            </div>

            <div className="row p-3 mt-3">
                <div className="col-12 m-auto">
                    {dispatchList}
                </div>
            </div>
        </div>

        );
    }



}

const mapStateToProps = state => ({

    user: state.auth.user,
    dispatches: state.dispatches.dispatches
});

export default connect(mapStateToProps, { logout })(DispatchList);
