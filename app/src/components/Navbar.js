import { useState } from "react";
import logo from "../assets/logo.png";
import "./navbar.css";

function Navbar() {
  return (
    
    <div className="div-navbar">
      <nav className="navbar-container">
      
       <img className="logo" src={logo} alt="Logo"/>
        <div className="nav-list">
                <a href="#">Níveis</a>
      
                <a href="#">Expressões</a>
      
                <a href="#">Aprenda mais</a>
        </div>
      
      </nav>
    </div>
  );
}

export default Navbar;