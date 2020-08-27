import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { updateTask } from '../../../actions/tasks';

class EditTask extends Component {

    state = {
        title: '',
        description: '',
        payment: ''
    }

    static propTypes = {
        logout: PropTypes.func,
        updateTask: PropTypes.func,
        update_msg: PropTypes.string
    }

    componentDidMount(){

        let taskdata = {};

        if(localStorage && localStorage.getItem('taskinfo')){
            taskdata = JSON.parse(localStorage.getItem('taskinfo'));
        }

        this.setState({

            id: taskdata._id,
            title: taskdata.title,
            description: taskdata.description,
            payment: taskdata.payment
        });

    }

    handleChange = e => this.setState({
        [e.target.name] : e.target.value
      });

    
    onSubmit = e => {
        e.preventDefault();
        
        const id = this.state.id;

        const taskdata = [
            {"propName": "title", "value": this.state.title},
            {"propName": "description", "value": this.state.description},
            {"propName": "payment", "value": this.state.payment}
        ];

        console.log(taskdata);

        this.props.updateTask(taskdata, id);
    }

  render() {

    const { id, title, description, payment } = this.state;
    const { update_msg } = this.props;

    return (
      <div className="container">

            <h4 className="p-3 text-success border-bottom">
                <i className="fa fa-home mr-2"></i> <small>Tasks</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to='/tasks' className="btn btn-success text-light rounded-0 ml-auto">
                    <i className="fa fa-arrow-right mr-1"></i> Tasks
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
                                name="title" 
                                placeholder="Enter title"
                                className="form-control" 
                                onChange={this.handleChange} 
                                value={title}
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
    update_msg: state.tasks.updateMsg
})

export default connect(mapStateToProps, { updateTask })(EditTask);
