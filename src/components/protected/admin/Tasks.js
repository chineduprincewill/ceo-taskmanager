import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import { fetchAllTasks, getTask, deleteTask } from '../../../actions/tasks';

class Tasks extends Component {

    static propTypes = {
        user: PropTypes.object,
        fetchAllTasks: PropTypes.func,
        editTask: PropTypes.func,
        deleteTask: PropTypes.func,
        tasks: PropTypes.array
    }


    componentDidMount () {

        this.props.fetchAllTasks();
    }


    editTask = taskid => {
        
        // console.log(userid);
         this.props.getTask(taskid);
 
         this.props.history.push('/editTask');
     }

  render() {

    const { tasks } = this.props;

    let tasksList;

    if(tasks){
        const data = Array.from(tasks);

            tasksList = data.map(tsk => (
                <tr key={tsk._id}>                      
                    <td>{tsk.title}</td>
                    <td>{tsk.description}</td>
                    <td>{tsk.payment}</td>
                    <td>
                    <button
                        className="btn btn-link btn-sm"
                        onClick={this.editTask.bind(this, tsk._id)}
                    >
                        <i className="fa fa-edit"></i>
                    </button>
                    <button
                        className="btn btn-link btn-sm text-danger"
                        onClick={this.props.deleteTask.bind(this, tsk._id)}
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
                <i className="fa fa-tasks mr-2"></i> <small>Tasks</small>
            </h4>

            <div className="row pr-3 mt-3">
                <Link to="/addtask" className="btn btn-link text-success rounded-0 ml-auto">
                    <i className="fa fa-plus mr-1"></i> Task
                </Link>
            </div>

            <div className="row p-3 mt-3">
                <div className="col-12 m-auto">
                    <table className="col-12 table table-hover table-responsive borderless">
                        <tbody>
                            <tr className="text text-success">
                                <td>title</td>
                                <td>description</td>
                                <td>value</td>
                                <td />
                            </tr>
                            { tasksList }
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
    tasks: state.tasks.tasks
});

export default connect(mapStateToProps, { fetchAllTasks, getTask, deleteTask })(withRouter(Tasks));
