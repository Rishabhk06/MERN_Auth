//seperated this handleJwt func to make things easy and avoid duplicacy
import axios from "axios";
import { SET_CURRENT_USER } from "./redux/actions/actionTypes";
import setAuthToken from "./setAuthToken";
import { handleTokenExpiration } from "./redux/actions/authAction";

const handleJwt = (dispatch, res) => {
  //save token to localstorage
  const { token } = res.data;
  localStorage.setItem("jwtToken", token);
  handleTokenExpiration();

  // Set token to Auth header with each req
  setAuthToken(token);

  //axios req to dashboard
  axios
    .get("/api/dashboard")
    .then((res) => {
      //return an action and further redirect using Redirect or
      //history.push from ComponentDidUpdate which checks global state
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data.user,
      });
    })
    .catch((err) => {
      console.log("err in handleJWT", err);
    });
};

export default handleJwt;
