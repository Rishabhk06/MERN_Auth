//In this module we will be sending axios req to our backend routes
import axios from "axios";
import { SET_CURRENT_USER, GET_ERRORS } from "./actionTypes";
import setAuthToken from "../../setAuthToken";
import store from "../store";
import handleJwt from "../../handleJwt.js";

//Register user axios req
const registerUser = (userData) => {
  //here thunk comes into play..ideally we could have only returned an action
  //from this actionCreator but with thunk we can return another function
  //which can handle async programming & further dispatch an action
  return function (dispatch) {
    axios
      .post("/api/users/register", userData)
      //re-direct to login on successful register
      .then((res) => {
        //we need to login user if registered successfully
        handleJwt(dispatch, res);
      })
      .catch((err) => {
        //err.response.data returns the error obj that we created in validations
        //standard way to catch axios errors (refer to axios docs)
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
      });
  };
};

// Login - get user token
const loginUser = (userData, history) => {
  return function (dispatch) {
    axios
      .post("/api/users/login", userData)
      //
      .then((res) => {
        handleJwt(dispatch, res);
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
    console.log("logoutUser");
    // Set current user to empty object which will set isAuthenticated to false
    dispatch({
      type: SET_CURRENT_USER,
      payload: {},
    });

    //redirect to '/login'
    // history.push("/login");
  };
};

//Check for token to keep user logged in even after refresh
const keepUserLoggedIn = () => {
  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    // Set token to Auth header with each req
    setAuthToken(token);

    //check if the user is already logged in
    axios
      .get("/dashboard")
      .then((res) => {
        //keep user set as current user in reducer

        //** here we need store.dispatch bcz in other actions we were
        //binding components with mapDispatchToProps
        //but here we need to call this action before component Layout renders **

        store.dispatch({
          type: SET_CURRENT_USER,
          payload: res.data.user,
        });
      })
      .catch((err) => {
        console.log("catch err in keepUserLoggedIn", err);

        //passport automatically checks for token expiry
        //we just need to remove it from localstorage
        store.dispatch(logoutUser());

        //send error as token expired
        store.dispatch({
          type: GET_ERRORS,
          payload: {
            tokenExpired: "Token Expired or Invalid. Please Login again",
          },
        });
      });
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

const handleTokenExpiration = () => {
  //to logout user if token expires even w/o refreshing page
  setTimeout(() => {
    if (localStorage.jwtToken) {
      console.log("token is now expired:");
      store.dispatch(logoutUser());

      store.dispatch({
        type: GET_ERRORS,
        payload: {
          tokenExpired: "Token Expired or Invalid. Please Login again",
        },
      });
    }
  }, 30 * 1000);
};

export {
  registerUser,
  loginUser,
  logoutUser,
  keepUserLoggedIn,
  clearErrors,
  handleTokenExpiration,
};
