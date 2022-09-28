import React from "react";
import "./LandingPage.scss";
import Header from "../../components/Header/Header";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=8db84fbb96fa4422b355b2d97d76dd6b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

function LandingPage() {
  return (
    <>
      <Header />
      <section className="landing__login">
        <h1 className="landing__title">Start your workout!</h1>
        <a href={AUTH_URL} className="landing__link">
          <span className="landing__link-text">Start</span>
        </a>
      </section>
    </>
  );
}

export default LandingPage;
