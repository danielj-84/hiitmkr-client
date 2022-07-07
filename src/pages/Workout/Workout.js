import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from "../../pages/Dashboard/Dashboard";
import LandingPage from "../../pages/LandingPage/LandingPage"

import { BrowserRouter, Route, Switch } from "react-router-dom";

const code = new URLSearchParams(window.location.search).get("code")

function Workout() {
  return (
    <div className="app">
    {code ? <Dashboard code={code} /> : <LandingPage />}
    </div>
  )
}

export default Workout;