import React, { Component } from "react";
import { logoutUser } from "../redux/actions/authAction";
import { connect } from "react-redux";
import axios from "axios";

class Dashboard extends Component {
  handleLogout = (event) => {
    this.props.logoutUser();
  };

  handleNextReq = () => {
    axios
      .get("/api/users/login/1")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
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

const mapStateToProps = (state) => {
  return {
    name: state.authDetails.user.name,
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
