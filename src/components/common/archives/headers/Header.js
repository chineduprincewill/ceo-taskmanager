import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoggedInHeader from './LoggedInHeader';

class Header extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

  render() {

    let navlinks = "";

    if(this.props.isAuthenticated){
        navlinks = <LoggedInHeader />
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
})

export default connect(mapStateToProps)(Header);
