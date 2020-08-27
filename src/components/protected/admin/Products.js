import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link } from 'react-router-dom';

import { fetchAllProducts, getProduct, deleteProduct } from '../../../actions/products';

class Products extends Component {

    static propTypes = {
        user: PropTypes.object,
        fetchAllProducts: PropTypes.func,
        getProduct: PropTypes.func,
        deleteProduct: PropTypes.func,
        products: PropTypes.array
    }


    componentDidMount () {

        this.props.fetchAllProducts();
    }


    editProduct = productid => {
        
        // console.log(userid);
         this.props.getProduct(productid);
 
         this.props.history.push('/editProduct');
     }

  render() {

    const { user, products } = this.props;

    if(user.role !== 'admin'){
        return <Redirect to="/login" />
    }

    let productsList;

    if(products){
        const data = Array.from(products);

            productsList = data.map(prdt => (
                <tr key={prdt._id}>                      
                    <td>{prdt.name}</td>
                    <td>{prdt.description}</td>
                    <td>{prdt.price}</td>
                    <td>{prdt.manufacturer}</td>
                    <td>{prdt.supplier}</td>
                    <td>
                    <button
                        className="btn btn-link btn-sm"
                        onClick={this.editProduct.bind(this, prdt._id)}
                    >
                        <i className="fa fa-edit"></i>
                    </button>
                    <button
                        className="btn btn-link btn-sm text-danger"
                        onClick={this.props.deleteProduct.bind(this, prdt._id)}
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
                <i className="fa fa-tasks mr-2"></i> <small>Products</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to="/addproduct" className="btn btn-link text-success rounded-0 ml-auto">
                    <i className="fa fa-plus mr-1"></i> Product
                </Link>
            </div>

            <div className="row p-3 mt-3">
                <div className="col-12 m-auto">
                    <table className="col-12 table table-hover table-responsive borderless">
                        <tbody>
                            <tr className="text text-success">
                                <td>name</td>
                                <td>description</td>
                                <td>price</td>
                                <td>manufacturer</td>
                                <td>supplier</td>
                                <td />
                            </tr>
                            { productsList }
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
    products: state.products.products
});

export default connect(mapStateToProps, { fetchAllProducts, getProduct, deleteProduct })(withRouter(Products));
