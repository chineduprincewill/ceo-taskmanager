import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logout } from '../../../actions/auth';
import { addProduct } from '../../../actions/products';

class AddProduct extends Component {

    state = {
        name: '',
        description: '',
        price: '',
        manufacturer: '',
        supplier: '',
        isAdded: false
    }

    static propTypes = {
        user: PropTypes.object,
        logout: PropTypes.func,
        isAdded: PropTypes.bool,
        addProduct: PropTypes.func
    }


    handleChange = e => this.setState({
        [e.target.name] : e.target.value
      });

    
    onSubmit = e => {
        e.preventDefault();

        const productdata = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            manufacturer: this.state.manufacturer,
            supplier: this.state.supplier
        }

        console.log(productdata);

        this.props.addProduct(productdata);

        this.setState({
            isAdded: true
        });
    }


  render() {

    if(this.state.isAdded){
        return <Redirect to="/products" />
    }

    const { name, description, price, manufacturer, supplier } = this.state;

    return (
      <div className="container">
          <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-home mr-2"></i> <small>Products</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to='/products' className="btn btn-link text-success rounded-0 ml-auto">
                    <i className="fa fa-arrow-right mr-1"></i> Products
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
                                name="name" 
                                placeholder="Enter product name"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={name}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea 
                                name="description"
                                className="form-control"
                                placeholder="Enter product description"
                                onChange={this.handleChange}
                                value={description}
                                required
                            >
                            </textarea>
                        </div>
                        
                        <div className="form-group mt-4">
                            <input 
                                type="number"
                                name="price" 
                                placeholder="Enter product unit price"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={price}
                                required
                            />
                        </div>

                        <div className="form-group mt-4">
                            <input 
                                type="text"
                                name="manufacturer" 
                                placeholder="Enter product manufacturer"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={manufacturer}
                                required
                            />
                        </div>

                        <div className="form-group mt-4">
                            <input 
                                type="text"
                                name="supplier" 
                                placeholder="Enter product supplier"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={supplier}
                                required
                            />
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
    user: state.auth.user,
    isAdded: state.products.isAdded,
    error: state.products.error
});

export default connect(mapStateToProps, { logout, addProduct })(AddProduct);
