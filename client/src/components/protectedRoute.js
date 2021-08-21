import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//We will create our own route : ProtectedRoute here
const ProtectedRoute = (props) => {
  //extracting from props(obj destructuring)
  let { component: Component, isAuthenticated, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          // props.history.push("/login");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authDetails.isAuthenticated,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
