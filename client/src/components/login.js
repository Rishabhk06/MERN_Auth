import react, { Component } from "react";
import "./styles.css";

class Login extends Component {
  render() {
    return (
      <div className="content-box">
        <h1>Log In</h1>
        <form>
          {/* Email field */}
          <label for="email">Email:</label>
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="Enter your registered Email"
            autoComplete="on"
            autoFocus="on"
            className="input-field"
          />
          <br></br>
          {/* Password field */}
          <label for="password">Password:</label>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="input-field"
          />
          <br></br>
          {/* Submit Button */}
          <button type="submit" className="login-button">
            Login
          </button>
          {/* Create New Account */}
          <h3 className="redirect-btn">Create New Account</h3>
        </form>
      </div>
    );
  }
}

export default Login;
