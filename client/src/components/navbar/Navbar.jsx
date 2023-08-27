import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  const navigate = useNavigate()
  const { user } = useContext(AuthContext);

  const loginRoute = () => {
    const path = `/login`;
    navigate(path);
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking.com</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton" >Register</button>
            <button className="navButton" onClick={loginRoute}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
