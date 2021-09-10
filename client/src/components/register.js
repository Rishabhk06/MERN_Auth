import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearErrors, registerUser } from "../redux/actions/authAction";
import "./styles.css";
import { isUndefined } from "lodash";
import classnames from "classnames";
import {
  FaArrowLeft,
  FaEnvelope,
  FaKey,
  FaUserCircle,
  FaUserPlus,
} from "react-icons/fa";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
    };
  }

  componentDidMount() {
    // If already logged in and user navigates to register page
    //redirect to dashboard
    if (this.props.authDetails.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  //To clear the global state errors
  //while redirecting b/w components
  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {
    //runs every time the component props update except for initial rendering
    //receives the prevProps
    if (this.props.authDetails.isAuthenticated) {
      console.log("pushed to dash");
      this.props.history.push("/dashboard");
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    //call registerUser from authActions
    this.props.registerUser({ newUser: newUser });
  };

  render() {
    const checkClass = {
      name: classnames(
        isUndefined(this.props.errors.name)
          ? "input-field"
          : "input-field error"
      ),
      email: classnames(
        isUndefined(this.props.errors.email)
          ? "input-field"
          : "input-field error"
      ),
      password: classnames(
        isUndefined(this.props.errors.password)
          ? "input-field"
          : "input-field error"
      ),
      password2: classnames(
        isUndefined(this.props.errors.password2)
          ? "input-field"
          : "input-field error"
      ),
      loginbtn: classnames(
        isUndefined(this.props.errors) ? "login-button" : "login-button error"
      ),
    };
    return (
      <div className="content-box">
        <Link to="/">
          <h3 className="redirect-btn home">
            <FaArrowLeft style={{ height: "0.7em" }} />
            Back to Home
          </h3>
        </Link>
        {!isUndefined(this.props.errors.displayMsg) && (
          <div className="error-msg">*{this.props.errors.displayMsg}</div>
        )}
        <h1 className="create-acc-heading">
          Create New Account
          <FaUserPlus style={{ marginInlineStart: "20px", height: "0.8em" }} />
        </h1>
        <form onSubmit={this.handleSubmit}>
          {/* Name field */}
          <label htmlFor="name">Name:</label>
          <br></br>
          <FaUserCircle
            style={{ position: "absolute", height: "5%", color: "grey" }}
          />
          <input
            name="name"
            placeholder="Enter your name"
            autoComplete="on"
            autoFocus="on"
            className={checkClass.name}
            onChange={this.handleChange}
          />
          {/* ternary opeators and function calls can be used 
          instead of if-else statements in render */}
          {!isUndefined(this.props.errors.name) && (
            <div className="error-msg">*{this.props.errors.name}</div>
          )}
          <br></br>

          {/* Email field */}
          <label htmlFor="email">Email:</label>
          <br></br>
          <FaEnvelope
            style={{ position: "absolute", height: "5%", color: "grey" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            autoComplete="on"
            className={checkClass.email}
            onChange={this.handleChange}
          />
          {!isUndefined(this.props.errors.email) && (
            <div className="error-msg">*{this.props.errors.email}</div>
          )}
          <br></br>
          {/* Password field */}
          <label htmlFor="password">Password:</label>
          <br></br>
          <FaKey
            style={{ position: "absolute", height: "5%", color: "grey" }}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className={checkClass.password}
            onChange={this.handleChange}
          />
          {!isUndefined(this.props.errors.password) && (
            <div className="error-msg">*{this.props.errors.password}</div>
          )}
          <br></br>
          {/* Confirm Password field */}
          <label htmlFor="password2">Confirm Password:</label>
          <br></br>
          <FaKey
            style={{ position: "absolute", height: "5%", color: "grey" }}
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            className={checkClass.password2}
            onChange={this.handleChange}
          />
          {!isUndefined(this.props.errors.password2) && (
            <div className="error-msg">*{this.props.errors.password2}</div>
          )}
          <br></br>
          {/* Submit Button */}
          <button type="submit" className={checkClass.loginbtn}>
            Sign Up
          </button>
          {/* Already Registered */}
          <Link to="/login">
            <h3 className="redirect-btn">Already Registered?Login</h3>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    authDetails: state.authDetails,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    registerUser: (param) => {
      //here Register comp is wrapped in Route(layout.js)
      // and therefore has direct access to the browser history
      //no need of withRouter
      //(refer: https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom)
      dispatch(registerUser(param.newUser, ownProps.history));
    },
    clearErrors: () => {
      dispatch(clearErrors());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
