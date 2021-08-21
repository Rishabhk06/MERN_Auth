//for attaching jwt token to every req when logged in and deleting if logged out.
import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
    console.log("axios headers", axios.defaults.headers);
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
