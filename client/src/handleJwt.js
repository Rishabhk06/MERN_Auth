//seperated this handleJwt func to make things easy and avoid duplicacy
import axios from "axios";
import { SET_CURRENT_USER } from "./redux/actions/actionTypes";
import setAuthToken from "./setAuthToken";
import { logoutUser } from "./redux/actions/authAction";
import store from "./redux/store";

const handleJwt = (dispatch, res, timeStamp = Date.now()) => {
  //save token to localstorage
  const { token } = res.data;
  localStorage.setItem("jwtToken", token);
  console.log("timeStamphandleJwt:::", timeStamp, Date.now());
  handleTokenExpiration(timeStamp);

  // Set token to Auth header with each req
  setAuthToken(token);

  //axios req to dashboard
  axios.get("/dashboard").then((res) => {
    //set current user in reducer
    console.log(res);

    //return an action and further redirect using Redirect or
    //history.push from ComponentDidUpdate which checks global state
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data.user,
    });
  });
};

export const handleTokenExpiration = () => {
  setTimeout(() => {
    console.log("token is now expired");
    store.dispatch(logoutUser());
  }, 5000);
};

export default handleJwt;
