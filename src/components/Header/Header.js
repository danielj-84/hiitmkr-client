import React from "react";
import "./Header.scss"
import logo from "../../assets/hiitmkr-white.png"
import { NavLink } from "react-router-dom";


function Header({handleModal}) {
  return (
    <div className="header">
        <a href="http://localhost:3000" className="header__linklogo" > <img className="header__logo" src={logo} alt="hiitmkr"></img></a>
        <ul className="header__nav">
          <NavLink to="/" className="header__nav-item">WORKOUT</NavLink>
          <NavLink to="/" className="header__nav-item" onClick={handleModal}>INFO</NavLink>
        </ul>
      </div>
  )
}

export default Header;