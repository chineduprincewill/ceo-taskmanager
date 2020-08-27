import React, { Component } from 'react';

class LoggedInHeader extends Component {
  render() {
    return (
      <div>
        <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
                <div className="brand-logo">
                <a href="index.html">
                <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
                <h5 className="logo-text">Dashtreme Admin</h5>
                </a>
            </div>
            <ul className="sidebar-menu do-nicescrol">
                <li className="sidebar-header">MAIN NAVIGATION</li>
                <li>
                    <a href="index.html">
                    <i className="zmdi zmdi-view-dashboard"></i> <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="icons.html">
                    <i className="zmdi zmdi-invert-colors"></i> <span>UI Icons</span>
                    </a>
                </li>

                <li>
                    <a href="forms.html">
                    <i className="zmdi zmdi-format-list-bulleted"></i> <span>Forms</span>
                    </a>
                </li>

                <li>
                    <a href="tables.html">
                    <i className="zmdi zmdi-grid"></i> <span>Tables</span>
                    </a>
                </li>

                <li>
                    <a href="calendar.html">
                    <i className="zmdi zmdi-calendar-check"></i> <span>Calendar</span>
                    <small className="badge float-right badge-light">New</small>
                    </a>
                </li>

                <li>
                    <a href="profile.html">
                    <i className="zmdi zmdi-face"></i> <span>Profile</span>
                    </a>
                </li>

                <li>
                    <a href="login.html" target="_blank">
                    <i className="zmdi zmdi-lock"></i> <span>Login</span>
                    </a>
                </li>

                <li>
                    <a href="register.html" target="_blank">
                    <i className="zmdi zmdi-account-circle"></i> <span>Registration</span>
                    </a>
                </li>

                <li className="sidebar-header">LABELS</li>
                <li><a href="javaScript:void();"><i className="zmdi zmdi-coffee text-danger"></i> <span>Important</span></a></li>
                <li><a href="javaScript:void();"><i className="zmdi zmdi-chart-donut text-success"></i> <span>Warning</span></a></li>
                <li><a href="javaScript:void();"><i className="zmdi zmdi-share text-info"></i> <span>Information</span></a></li>

                </ul>
            
            </div>

            <header className="topbar-nav">
            <nav className="navbar navbar-expand fixed-top">
            <ul className="navbar-nav mr-auto align-items-center">
                <li className="nav-item">
                <a className="nav-link toggle-menu">
                <i className="icon-menu menu-icon"></i>
                </a>
                </li>
                <li className="nav-item">
                <form className="search-bar">
                    <input type="text" className="form-control" placeholder="Enter keywords" />
                    <a href="javascript:void();"><i className="icon-magnifier"></i></a>
                </form>
                </li>
            </ul>
                
            <ul className="navbar-nav align-items-center right-nav-link">
                <li className="nav-item dropdown-lg">
                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" href="javascript:void();">
                <i className="fa fa-envelope-open-o"></i></a>
                </li>
                <li className="nav-item dropdown-lg">
                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" href="javascript:void();">
                <i className="fa fa-bell-o"></i></a>
                </li>
                <li className="nav-item language">
                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" href="javascript:void();"><i className="fa fa-flag"></i></a>
                <ul className="dropdown-menu dropdown-menu-right">
                    <li className="dropdown-item"> <i className="flag-icon flag-icon-gb mr-2"></i> English</li>
                    <li className="dropdown-item"> <i className="flag-icon flag-icon-fr mr-2"></i> French</li>
                    <li className="dropdown-item"> <i className="flag-icon flag-icon-cn mr-2"></i> Chinese</li>
                    <li className="dropdown-item"> <i className="flag-icon flag-icon-de mr-2"></i> German</li>
                    </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" href="#">
                    <span className="user-profile"><img src="https://via.placeholder.com/110x110" className="img-circle" alt="user avatar" /></span>
                </a>
                <ul className="dropdown-menu dropdown-menu-right">
                <li className="dropdown-item user-details">
                    <a href="javaScript:void();">
                    <div className="media">
                        <div className="avatar"><img className="align-self-start mr-3" src="https://via.placeholder.com/110x110" alt="user avatar" /></div>
                        <div className="media-body">
                        <h6 className="mt-2 user-title">Sarajhon Mccoy</h6>
                        <p className="user-subtitle">mccoy@example.com</p>
                        </div>
                    </div>
                    </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li className="dropdown-item"><i className="icon-envelope mr-2"></i> Inbox</li>
                    <li className="dropdown-divider"></li>
                    <li className="dropdown-item"><i className="icon-wallet mr-2"></i> Account</li>
                    <li className="dropdown-divider"></li>
                    <li className="dropdown-item"><i className="icon-settings mr-2"></i> Setting</li>
                    <li className="dropdown-divider"></li>
                    <li className="dropdown-item"><i className="icon-power mr-2"></i> Logout</li>
                </ul>
                </li>
            </ul>
            </nav>
            </header>

            <div className="clearfix"></div>
      </div>
    );
  }
}

export default LoggedInHeader;
