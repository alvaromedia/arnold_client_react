import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-view">
      <Link to="/">
        <h1 className="navbar-title">ARNOLD API</h1>
      </Link>
      <ul className="navbar-list">
        <li>
          <Link to="/login"> Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
