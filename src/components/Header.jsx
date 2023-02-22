import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

const Header = () => {
  const pathname = useLocation().pathname;
  const activeClassName = "navbar__links__style--focused";

  return (
    <header>
      <nav className="navbar">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="navbar__img" />
        </NavLink>
        <div className="navbar__links">
          <NavLink
            exact
            to="/"
            className={`${
              pathname === "/"
                ? `navbar__links__style ${activeClassName}`
                : `navbar__links__style`
            }`}
          >
            Accueil
          </NavLink>
          <NavLink
            exact
            to="/about"
            className={`${
              pathname === "/about"
                ? `navbar__links__style ${activeClassName}`
                : `navbar__links__style`
            }`}
          >
            a propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
