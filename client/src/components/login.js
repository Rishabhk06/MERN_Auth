import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearErrors, loginUser } from "../redux/actions/authAction";
import "./styles.css";
import { isUndefined } from "lodash";
import classnames from "classnames";
import { FaArrowLeft, FaSignInAlt, FaEnvelope, FaKey } from "react-icons/fa";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    // If already logged in and user navigates to login page
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

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    //call loginUser from authActions
    this.props.loginUser({ userData });
  };

  render() {
    const checkClass = {
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
      passwordincorrect: classnames(
        isUndefined(this.props.errors.passwordincorrect)
          ? "input-field"
          : "input-field error"
      ),
      emailnotfound: classnames(
        isUndefined(this.props.errors.emailnotfound)
          ? "input-field"
          : "input-field error"
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
        {/* session expired error msg */}
        {!isUndefined(this.props.errors.tokenExpired) && (
          <div className="error-msg">*{this.props.errors.tokenExpired}</div>
        )}
        <h1>
          Log In
          <FaSignInAlt style={{ marginInlineStart: "20px", height: "0.8em" }} />
        </h1>
        <form onSubmit={this.handleSubmit}>
          {/* Email field */}
          <label htmlFor="email">Email:</label>
          <br></br>
          <FaEnvelope
            style={{ position: "absolute", height: "5%", color: "grey" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your registered Email"
            autoComplete="on"
            autoFocus="on"
            className={checkClass.email}
            onChange={this.handleChange}
          />
          {!isUndefined(this.props.errors.email) && (
            <div className="error-msg">*{this.props.errors.email}</div>
          )}
          {!isUndefined(this.props.errors.emailnotfound) && (
            <div className="error-msg">*{this.props.errors.emailnotfound}</div>
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
          {!isUndefined(this.props.errors.passwordincorrect) && (
            <div className="error-msg">
              *{this.props.errors.passwordincorrect}
            </div>
          )}
          <br></br>
          {/* Submit Button */}
          <button type="submit" className="login-button">
            Login
          </button>
          {/* Create New Account */}
          <Link to="/register">
            <h3 className="redirect-btn">Create New Account</h3>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state from login react comp", state);
  return {
    authDetails: state.authDetails,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (param) => {
      dispatch(loginUser(param.userData));
    },
    clearErrors: () => {
      dispatch(clearErrors());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
