import React from "react";
import "./Header.scss"
import logo from "../../assets/hiitmkr-white.png"

function Header() {
  return (
    <div className="pageheader">
        <a href="http://localhost:3000" className="pageheader__link"> <img className="pageheader__logo" src={logo} alt="HIITmkr logo"></img></a>
      </div>
  )
}

export default Header;