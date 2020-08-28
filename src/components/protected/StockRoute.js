import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const StockRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
        if (auth.isAuthenticated  &&  auth.user.role === 'stock') {
            return <Component {...props} />;
        } else {
            return <Redirect to="/error" />;
        }
    }}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(StockRoute);
