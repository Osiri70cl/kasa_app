import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="navbar__img" />
        </NavLink>
        <div className="navbar__links">
          <NavLink to="/" className="navbar__links__style">
            Accueil
          </NavLink>
          <NavLink to="/about" className="navbar__links__style">
            a propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
