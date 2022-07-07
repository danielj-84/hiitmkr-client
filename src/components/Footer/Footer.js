import React from "react";
import "./Footer.scss"


function Footer() {
  return (
    <div className="footer">
        <span className="footer__copyright">Copyright © Daniel DiMatteo-Garcia</span>
        <div className="footer__socials">
          <a className="footer__link" href="https://github.com/danielj-84/"><img className="footer__icon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"/></a>
          <a className="footer__link" href="https://www.linkedin.com/in/danielbutincode"><img className="footer__icon" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"/></a>   
        </div>
    </div>
  )
}

export default Footer;