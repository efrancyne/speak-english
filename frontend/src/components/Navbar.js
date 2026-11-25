import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaBookmark,
  FaLayerGroup,
  FaSignInAlt,
  FaSignOutAlt,
  FaTimes,
  FaUserCircle,
  FaUserPlus,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import "./navbar.css";

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    onLogout();
    closeMenu();
    navigate("/");
  };

  return (
    <div className="div-navbar">
      <nav className="navbar-container">
        <Link to="/" onClick={closeMenu}>
          <img className="logo" src={logo} alt="Speak English" />
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={menuOpen ? "nav-menu open" : "nav-menu"}>
          {user ? (
            <>
              <NavLink to="/niveis" onClick={closeMenu}>
                <FaLayerGroup /> Níveis
              </NavLink>
              <NavLink to="/meus-estudos" onClick={closeMenu}>
                <FaBookmark /> Meus estudos
              </NavLink>
              <span className="nav-user">
                <FaUserCircle /> {user.name.split(" ")[0]}
              </span>
              <button className="btn btn-outline btn-sm" onClick={handleLogout}>
                <FaSignOutAlt /> Sair
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-primary btn-sm" to="/login" onClick={closeMenu}>
                <FaSignInAlt /> Entrar
              </Link>
              <Link className="btn btn-outline btn-sm" to="/cadastro" onClick={closeMenu}>
                <FaUserPlus /> Criar conta
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
