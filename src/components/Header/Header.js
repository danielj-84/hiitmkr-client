import React from "react";
import "./Header.scss"
import logo from "../../assets/hiitmkr-white.png"
import { BrowserRouter, NavLink, Router } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <BrowserRouter>
        <a href="http://localhost:3000" className="header__linklogo" > <img className="header__logo" src={logo} alt=""></img></a>
        <ul className="header__nav">
          {/* <NavLink to="/profile" className="header__nav-item">PROFILE</NavLink> */}
          <NavLink to="/prepare" className="header__nav-item">WORKOUT</NavLink>
          <NavLink to="/moreinfo" className="header__nav-item">INFO</NavLink>
        </ul>
      </BrowserRouter>

      </div>
  )
}

export default Header;