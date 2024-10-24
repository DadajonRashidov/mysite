import { Link, NavLink } from "react-router-dom";
import MainIcon from "../../../assets/icons/mainicon.png";
import "./style.scss";
function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <Link to={"/"}>
          <img src={MainIcon} alt="" />
        </Link>
      </div>

      <div className="menu">
        <div className="nav-links">
          <NavLink
            to="home"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="menu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Menu
          </NavLink>
          <NavLink
            to="login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
