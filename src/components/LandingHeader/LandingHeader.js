import React from "react";
import "./LandingHeader.scss"
import logo from "../../assets/hiitmkr-white.png"
import { NavLink } from "react-router-dom";


function LandingHeader() {
  return (
    <div className="landing-header">
        <NavLink to="/" className="landing-header__linklogo" > <img className="landing-header__logo" src={logo} alt=""></img></NavLink>
      </div>
  )
}

export default LandingHeader;