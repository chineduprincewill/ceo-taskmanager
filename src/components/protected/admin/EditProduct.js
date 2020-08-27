import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { updateProduct } from '../../../actions/products';

class EditProduct extends Component {

    state = {
        name: '',
        description: '',
        price: '',
        manufacturer: '',
        supplier: ''
    }

    static propTypes = {
        logout: PropTypes.func,
        updateProduct: PropTypes.func,
        update_msg: PropTypes.string
    }

    componentDidMount(){

        let productdata = {};

        if(localStorage && localStorage.getItem('productinfo')){
            productdata = JSON.parse(localStorage.getItem('productinfo'));
        }

        this.setState({

            id: productdata._id,
            name: productdata.name,
            description: productdata.description,
            price: productdata.price,
            manufacturer: productdata.manufacturer,
            supplier: productdata.supplier
        });

    }

    handleChange = e => this.setState({
        [e.target.name] : e.target.value
      });

    
    onSubmit = e => {
        e.preventDefault();
        
        const id = this.state.id;

        const productdata = [
            {"propName": "name", "value": this.state.name},
            {"propName": "description", "value": this.state.description},
            {"propName": "price", "value": this.state.price},
            {"propName": "manufacturer", "value": this.state.manufacturer},
            {"propName": "supplier", "value": this.state.supplier}
        ];

        console.log(productdata);

        this.props.updateProduct(productdata, id);
    }

  render() {

    const { id, name, description, price, manufacturer, supplier } = this.state;
    const { update_msg } = this.props;

    return (
      <div className="container">

            <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-home mr-2"></i> <small>Products</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to='/products' className="btn btn-success text-light rounded-0 ml-auto">
                    <i className="fa fa-arrow-right mr-1"></i> Products
                </Link>
            </div>

            <div className="row p-3 mt-3">
                <div className="col-3"></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <i className="fa fa-edit fa-2x text-success"></i>
                <p className="text text-success text-center mt-2">
                    { update_msg ? update_msg : ""}
                </p>
                    <form onSubmit={this.onSubmit} className="mt-3">
                        <div className="form-group">
                            <input
                                type="hidden"
                                name="id"
                                onChange={this.handleChange}
                                value={id}
                            />
                            <input 
                                type="text"
                                name="name" 
                                placeholder="Enter name"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={name}
                                required
                            />
                        </div>
                        
                        <div className="form-group mt-4">
                            <textarea 
                                name="description"
                                className="form-control"
                                placeholder="Enter task description"
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
                                placeholder="Enter unit price"
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
                                placeholder="Enter manufacturer"
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
                                placeholder="Enter supplier"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={supplier}
                                required
                            />
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
    update_msg: state.products.updateMsg
})

export default connect(mapStateToProps, { updateProduct })(EditProduct);
