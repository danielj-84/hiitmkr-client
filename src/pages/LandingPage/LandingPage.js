import React from "react";
import { NavLink } from "react-router-dom";
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import "./LandingPage.scss";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=8db84fbb96fa4422b355b2d97d76dd6b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

function LandingPage() {
  return (
    <>
      <LandingHeader />
      <div className="landing">
        <section className="landing__more">
          <h1 className="landing__title">Learn more about HIIT</h1>
          <NavLink to="/moreinfo" className="landing__link">
            <span className="landing__link-text">Learn More</span>
          </NavLink>
        </section>
        <section className="landing__login">
          <h1 className="landing__title">Start your workout!</h1>
          <a href={AUTH_URL} className="landing__link">
            <span className="landing__link-text">Start</span>
          </a>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
