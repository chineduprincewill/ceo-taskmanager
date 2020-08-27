import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getStocksAll, getStock } from '../../../actions/stocks';
import { listDispatch } from '../../../actions/dispatches';


import { logout } from '../../../actions/auth';

class Stocks extends Component {

    static propTypes = {
        user: PropTypes.object,
        logout: PropTypes.func,
        isAdded: PropTypes.bool,
        stocks: PropTypes.array,
        error: PropTypes.array,
        getStocksAll: PropTypes.func,
        getStock: PropTypes.func,
        listDispatch: PropTypes.func
    }

    componentDidMount(){

        this.props.getStocksAll();
    }


    dispatchitem = stockid => {

        this.props.getStock(stockid);

        this.props.history.push('/dispatch-item');
    }


    dispatchlist = stockid => {

        this.props.listDispatch(stockid);

        this.props.history.push('/dispatch-list');
    }


  render() {

    const { user, stocks } = this.props;

    let stocksList;

    if(user.role !== 'admin'){
            
        this.props.logout();
    }

    if(stocks){
        const data = Array.from(stocks);

            stocksList = data.map(stk => (
                <tr key={stk._id}>                      
                    <td>{stk.item}</td>
                    <td>{stk.batch}</td>
                    <td>{stk.total}</td>
                    <td>{stk.received}</td>
                    <td>{stk.dispatched}</td>
                    <td>{stk.balance}</td>
                    <td>{stk.others}</td>
                    <td>
                    <button
                        className="btn btn-link btn-sm"
                        onClick={this.dispatchlist.bind(this, stk._id)}
                    >
                        <i className="fa fa-search"></i>
                    </button>
                    <button
                        className="btn btn-link btn-sm text-danger"
                    >
                        <i className="fa fa-remove"></i>
                    </button>
                    <button
                        className="btn btn-link btn-sm text-success"
                        onClick={this.dispatchitem.bind(this, stk._id)}
                        title="dispatch item"
                    >
                        <i className="fa fa-arrow-right"></i>
                    </button>
                    </td>
                </tr>
                )
            )
    }
    
    return (
        <div className="container">
            <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-home mr-2"></i> <small>Stock</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to="/add-stock" className="btn btn-link text-success rounded-0 ml-auto">
                    <i className="fa fa-plus mr-1"></i> Stock
                </Link>
            </div>

            <div className="row p-3 mt-3">
                <div className="col-12 m-auto">
                    <table className="table table-hover table-responsive borderless">
                        <tbody>
                            <tr className="text text-success">
                                <td>ITEM</td>
                                <td>BATCH NO</td>
                                <td>QUANTITY RECEIVED</td>
                                <td>DATE RECEIVED</td>
                                <td>QUANTITY DISPATCHED</td>
                                <td>BALANCE</td>
                                <td>OTHER INFORMATION</td>
                                <td />
                            </tr>
                            { stocksList }
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
    stocks: state.stocks.stocks,
    error: state.stocks.error
});

export default connect(mapStateToProps, { logout, getStocksAll, getStock, listDispatch })(withRouter(Stocks));
