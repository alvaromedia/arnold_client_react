import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import "./Navbar.css";
import { useContext } from "react";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.clear();
  };

  return (
    <header className="navbar-view">
      <Link to="/">
        <h1 className="navbar-title">ARNOLD API</h1>
      </Link>
      <ul className="navbar-list">
        {!currentUser ? (
          <>
            <li>
              <Link to="/login"> Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/profile">{currentUser}</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Navbar;
