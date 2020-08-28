import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AdminRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
        if (!auth.isAuthenticated  ||  auth.user.role !== 'admin') {
            return <Redirect to="/error" />;
        } else {
            return <Component {...props} />;
        }
    }}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminRoute);
