import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Roles from './Roles';
import logo from '../../images/homeLogo.png';

class Header extends Component {

    static propTypes = {
        isAuthencitcated: PropTypes.bool
    }

  render() {

    let navlinks;

    if(this.props.isAuthenticated){
        navlinks =  <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} width="30px" alt="CEO LOGO" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <Roles />
                        </div>
                    </nav>;
    }
    else{
        navlinks = "";
    }

    return (
        <div>
            {navlinks}
        </div>
    );
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Header);
