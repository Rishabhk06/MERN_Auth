import react, { Component } from "react";
import "./styles.css";

class Register extends Component {
  render() {
    return (
      <div className="content-box">
        <h1>Create New Account</h1>
        <form>
          {/* Name field */}
          <label for="name">Name:</label>
          <br></br>
          <input
            name="name"
            placeholder="Enter your name"
            autoComplete="on"
            autoFocus="on"
            className="input-field"
          />
          <br></br>

          {/* Email field */}
          <label for="email">Email:</label>
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            autoComplete="on"
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
          {/* Confirm Password field */}
          <label for="password2">Confirm Password:</label>
          <br></br>
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            className="input-field"
          />
          <br></br>
          {/* Submit Button */}
          <button type="submit" className="login-button">
            Sign Up
          </button>
          {/* Already Registered */}
          <h3 className="redirect-btn">Already Registered?Login</h3>
        </form>
      </div>
    );
  }
}

export default Register;
