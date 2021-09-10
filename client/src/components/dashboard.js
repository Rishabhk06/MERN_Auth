import React, { Component } from "react";
import { logoutUser } from "../redux/actions/authAction";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  handleLogout = (event) => {
    this.props.logoutUser();
  };

  handleNextReq = () => {
    axios
      .get("/api/users/login/1")
      .then((res) => console.log(res))
      .catch((err) => console.log("err in handleNextReq dashabord", err));
  };

  componentDidUpdate(prevProps) {
    //when token expires, we set isauth to false; hence push to login
    if (!prevProps.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  render() {
    if (!this.props.isAuthenticated) {
      //Redirect can only be used in render
      //history.push can however be used in componentDidUpdate
      return <Redirect to="/login" />;
    } else {
      return (
        <div className="dashboard-bkg">
          <h1>Welcome {this.props.name} </h1>
          <h2>You have successfully logged in</h2>
          <button onClick={this.handleLogout}>Logout</button>
          <button onClick={this.handleNextReq}>
            send further req to check auth header
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authDetails.isAuthenticated,
    name: state.authDetails.user.name,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
