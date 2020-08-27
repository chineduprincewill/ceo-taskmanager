import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div id="admin"> 
        <div className="row p-3">
            <div className="col-lg-3 col-md-4 col-sm-11 col-xs-11 p-3 border-bottom">
                <Link to="/locations">
                    <i className="fa fa-home fa-3x mr-2"></i>
                    <p>Locations</p>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-11 col-xs-11 p-3 border-bottom">
                <Link to="/tasks">
                    <i className="fa fa-tasks fa-3x mr-2"></i>
                    <p>Tasks</p>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-11 col-xs-11 p-3 border-bottom">
                <Link to="/schedules">
                    <i className="fa fa-calendar fa-3x mr-2"></i>
                    <p>Schedules</p>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-11 col-xs-11 p-3 border-bottom">
                <Link to="/users">
                    <i className="fa fa-users fa-3x mr-2"></i>
                    <p>Users</p>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-11 col-xs-11 p-3 border-bottom">
                <Link to="/stocks">
                    <i className="fa fa-home fa-3x mr-2"></i>
                    <p>Stock</p>
                </Link>
            </div>
        </div>

        <h5 className="p-3 mt-5 text-success border-bottom">
            <i className="fa fa-question mr-2"></i> <small>About CEO-TM Admin Account</small>
        </h5>

        <div className="row p-3">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a href="#locations" className="nav-link active" data-toggle="tab">Locations</a>
                </li>
                <li className="nav-item">
                    <a href="#tasks" className="nav-link" data-toggle="tab">Tasks</a>
                </li>
                <li className="nav-item">
                    <a href="#schedules" className="nav-link" data-toggle="tab">Schedules</a>
                </li>
                <li className="nav-item">
                    <a href="#users" className="nav-link" data-toggle="tab">Users</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="locations">
                    <p className="mt-2">Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
                </div>
                <div className="tab-pane fade" id="tasks">
                    <p className="mt-2">Vestibulum nec erat eu nulla rhoncus fringilla ut non neque. Vivamus nibh urna, ornare id gravida ut, mollis a magna. Aliquam porttitor condimentum nisi, eu viverra ipsum porta ut. Nam hendrerit bibendum turpis, sed molestie mi fermentum id. Aenean volutpat velit sem. Sed consequat ante in rutrum convallis. Nunc facilisis leo at faucibus adipiscing.</p>
                </div>
                <div className="tab-pane fade" id="schedules">
                    <p className="mt-2">Donec vel placerat quam, ut euismod risus. Sed a mi suscipit, elementum sem a, hendrerit velit. Donec at erat magna. Sed dignissim orci nec eleifend egestas. Donec eget mi consequat massa vestibulum laoreet. Mauris et ultrices nulla, malesuada volutpat ante. Fusce ut orci lorem. Donec molestie libero in tempus imperdiet. Cum sociis natoque penatibus et magnis.</p>
                </div>
                <div className="tab-pane fade" id="users">
                    <p className="mt-2">Donec vel placerat quam, ut euismod risus. Sed a mi suscipit, elementum sem a, hendrerit velit. Donec at erat magna. Sed dignissim orci nec eleifend egestas. Donec eget mi consequat massa vestibulum laoreet. Mauris et ultrices nulla, malesuada volutpat ante. Fusce ut orci lorem. Donec molestie libero in tempus imperdiet. Cum sociis natoque penatibus et magnis.</p>
                </div>
            </div>
        </div>
        
    </div>

  );
}
