import "./styles.css";
import Login from "./login";
import Register from "./register";
import LandingPage from "./landing_page";
import { BrowserRouter, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../redux/store";

import Dashboard from "./dashboard";
import Page404 from "./404";
import ProtectedRoute from "./protectedRoute";
import {
  handleTokenExpiration,
  keepUserLoggedIn,
} from "../redux/actions/authAction";

//to keep user logged in even after refresh until he logs out or token expires
keepUserLoggedIn();
handleTokenExpiration();

function Layout() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="flexbox-container">
          <div className="flexbox-item1">
            Flexbox Item1
            <h1 className="cover-heading">PASSPORT-JWT AUTHORIZATION</h1>
          </div>
          <div className="flexbox-item2">
            <div className="top-bar">MERN Auth App</div>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            {/* <ProtectedRoute exact path="/dashboard" component={Dashboard} /> */}
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route component={Page404} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default Layout;
