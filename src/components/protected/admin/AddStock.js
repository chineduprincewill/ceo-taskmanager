import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logout } from '../../../actions/auth';
import { addStock } from '../../../actions/stocks';

import { Form } from 'react-bootstrap';

class AddStock extends Component {

    state = {
        item: '',
        batch: '',
        total: '',
        received: '',
        dispatched: '',
        balance: '',
        others: ''
    }

    static propTypes = {
        user: PropTypes.object,
        logout: PropTypes.func,
        addStock: PropTypes.func
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

        const dispatchedqty = 0;
        const dateReceived  = this.toTimeStamp(this.state.received);

        const stockdata = {
            item: this.state.item,
            batch: this.state.batch,
            total: this.state.total,
            received: dateReceived,
            dispatched: dispatchedqty,
            balance: this.state.total,
            others: this.state.others
            }

        //console.log(stockdata);

        this.props.addStock(stockdata);
    }


  render() {
    
    const { user } = this.props;

    if(user.role !== 'admin'){
        this.props.logout();
    }

    const { item, batch, total, received, dispatched, balance, others } = this.state;


    return (
      <div className="container">
          <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-home mr-2"></i> <small>Stocks</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to='/stocks' className="btn btn-link text-success rounded-0 ml-auto">
                    <i className="fa fa-arrow-right mr-1"></i> Stocks
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
                                name="item" 
                                placeholder="Enter item name"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={item}
                                required
                            />
                        </div>
                        
                        <div className="form-group mt-4">
                            <input 
                                type="text"
                                name="batch" 
                                placeholder="Enter item batch"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={batch}
                                required
                            />
                        </div>

                        <div className="form-group mt-4">
                            <input 
                                type="text"
                                name="total" 
                                placeholder="Enter total quantity"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={total}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <Form.Group controlId="received">
                                <Form.Label>Date Received</Form.Label>
                                <Form.Control 
                                    type="date" 
                                    name="received" 
                                    placeholder="received date" 
                                    onChange={this.handleChange}
                                    value={received}
                                />
                            </Form.Group>
                        </div>

                        <div className="form-group mt-4">
                            <input 
                                type="hidden"
                                name="dispatched" 
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={dispatched}
                                required
                            />
                        </div>

                        <div className="form-group mt-4">
                            <input 
                                type="hidden"
                                name="balance" 
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={balance}
                                required
                            />
                        </div>

                        <div className="form-group mt-4">
                            <textarea 
                                name="others"
                                placeholder="Other information"
                                className="form-control"
                                value={others}
                                onChange={this.handleChange}
                            >
                            </textarea>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-success btn-block mt-4">Add</button>
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
    user: state.auth.user
});

export default connect(mapStateToProps, { logout, addStock })(AddStock);
