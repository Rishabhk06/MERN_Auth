import react, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaNpm,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiAuth0,
  SiPostman,
  SiJavascript,
} from "react-icons/si";

class LandingPage extends Component {
  render() {
    return (
      <div className="content-box-landing">
        <h1>Welcome to Full Stack MERN Auth App</h1>
        <h2 className="sub-heading">Get Started</h2>
        {/* Login Button */}
        <Link to="/login">
          <button className="landing-button">Login</button>
        </Link>
        {/* Signup Button */}
        <Link to="/register">
          <button className="landing-button">Register</button>
        </Link>
        <h1 className="sub-heading">Tech Stack:</h1>
        <div className="marquee-box">
          <ul className="marquee-content">
            <li>
              <FaReact className="icons" />
            </li>
            <li>
              <FaNodeJs className="icons" />
            </li>
            <li>
              <SiMongodb className="icons" />
            </li>
            <li>
              <SiRedux className="icons" />
            </li>
            <li>
              <SiAuth0 className="icons" />
            </li>
            <li>
              <FaGithub className="icons" />
            </li>
            <li>
              <FaReact className="icons" />
            </li>
            <li>
              <SiPostman className="icons" />
            </li>

            <li>
              <FaHtml5 className="icons" />
            </li>
            <li>
              <FaCss3 className="icons" />
            </li>
            <li>
              <SiJavascript className="icons" />
            </li>
            <li>
              <FaNpm className="icons" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LandingPage;
