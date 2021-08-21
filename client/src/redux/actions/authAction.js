//In this module we will be sending axios req to our backend routes
import axios from "axios";
import { SET_CURRENT_USER, GET_ERRORS } from "./actionTypes";
import setAuthToken from "../../setAuthToken";
import jwt_decode from "jwt-decode";
import store from "../store";
import { Redirect } from "react-router-dom";

//Register user axios req
const registerUser = (userData, history) => {
  //here thunk comes into play..ideally we could have only returned an action
  //from this actionCreator but with thunk we can return another function
  //which can handle async programming & further dispatch an action
  return function (dispatch) {
    axios
      .post("/api/users/register", userData)
      //re-direct to login on successful register
      .then((res) => history.push("/login"))
      .catch((err) => {
        //err.response.data returns the error obj that we created in validations
        //standard way to catch axios errors (refer to axios docs)
        console.log(
          "err.response.data in registerUser(authActions.js)",
          err.response.data
        );
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
      });
  };
};

// Login - get user token
const loginUser = (userData) => {
  return function (dispatch) {
    axios
      .post("/api/users/login", userData)
      //
      .then((res) => {
        console.log("res.data from loginUser", res.data);

        //save token to localstorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);

        // Set token to Auth header with each req
        setAuthToken(token);

        // Decode token to get user data
        const decoded = jwt_decode(token);

        //set current user in reducer
        dispatch({
          type: SET_CURRENT_USER,
          payload: decoded,
        });

        // clear the errors object from store if login is successful
        dispatch({
          type: GET_ERRORS,
          payload: {},
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
      });
  };
};

//Logging user out
const logoutUser = () => {
  return function (dispatch) {
    //Remove token from localstorage
    localStorage.removeItem("jwtToken");

    // Remove auth header for future requests
    setAuthToken(false);

    // Set current user to empty object which will set isAuthenticated to false
    dispatch({
      type: SET_CURRENT_USER,
      payload: {},
    });
  };
};

//Check for token to keep user logged in even after refresh
const keepUserLoggedIn = () => {
  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    // Set token to Auth header with each req
    setAuthToken(token);

    // Decode token to get user data
    const decoded = jwt_decode(token);

    //keep user set as current user in reducer

    //** here we need store.dispatch bcz in other actions we were
    //binding components with mapDispatchToProps
    //but here we need to call this action before component Layout renders **
    store.dispatch({
      type: SET_CURRENT_USER,
      payload: decoded,
    });

    //check for token expiry
    const currentTime = Math.round(Date.now() / 1000);
    console.log(decoded.exp, currentTime);
    if (decoded.exp < currentTime) {
      //token has expired; we need to log user out
      console.log("token expired");
      store.dispatch(logoutUser());

      //send error as token expired
      store.dispatch({
        type: GET_ERRORS,
        payload: { tokenExpired: "Session Timed Out. Please Login again" },
      });
    }
  }
};

const clearErrors = () => {
  return function (dispatch) {
    // clear the errors object from store if login is successful
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  };
};

export { registerUser, loginUser, logoutUser, keepUserLoggedIn, clearErrors };
