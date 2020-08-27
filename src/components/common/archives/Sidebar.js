import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navlinks from './Navlinks';

class Sidebar extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

  render() {

    let navlinks = "";
    
    if(this.props.isAuthenticated){
        navlinks = <Navlinks />
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

export default connect(mapStateToProps)(Sidebar);
