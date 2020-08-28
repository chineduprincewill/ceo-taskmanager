import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logout } from '../../../actions/auth';
import { addTask } from '../../../actions/tasks';

class AddTask extends Component {

    state = {
        title: '',
        description: '',
        payment: ''
    }

    static propTypes = {
        user: PropTypes.object,
        logout: PropTypes.func,
        isAdded: PropTypes.bool,
        addTask: PropTypes.func
    }


    handleChange = e => this.setState({
        [e.target.name] : e.target.value
      });

    
    onSubmit = e => {
        e.preventDefault();

        const taskdata = {
            title: this.state.title,
            description: this.state.description,
            payment: this.state.payment
        }

        console.log(taskdata);

        this.props.addTask(taskdata);
    }


  render() {
    
    const { isAdded } = this.props;

    if(isAdded){
        return <Redirect to="/tasks" />
    }

    const { title, description, payment } = this.state;

    return (
      <div className="container">
          <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-home mr-2"></i> <small>Tasks</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to='/tasks' className="btn btn-link text-success rounded-0 ml-auto">
                    <i className="fa fa-arrow-right mr-1"></i> Tasks
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
                                name="title" 
                                placeholder="Enter title"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={title}
                                required
                            />
                        </div>

                        <div className="form-group">
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
                                name="payment" 
                                placeholder="Enter task value"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={payment}
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
    user: state.auth.user,
    isAdded: state.tasks.isAdded,
    error: state.tasks.error
});

export default connect(mapStateToProps, { logout, addTask })(AddTask);
