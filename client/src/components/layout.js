import "./styles.css";
import Login from "./login";
import Register from "./register";

function Layout() {
  return (
    <div className="flexbox-container">
      <div className="flexbox-item1">Flexbox Item1</div>
      <div className="flexbox-item2">
        <div className="top-bar">MERN Auth App</div>
        <Register />
      </div>
    </div>
  );
}

export default Layout;
