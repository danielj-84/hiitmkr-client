import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Workout from "./pages/Workout/Workout"
import Login from "./pages/Login/Login";
import MoreInfo from "./pages/MoreInfo/MoreInfo";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {code ? <Dashboard code={code} /> : <LandingPage />}
        {/* <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/workout" component={Workout} />
          <Route path="/login" component={Login}/>
          <Route path="/moreinfo" component={MoreInfo}/>
        </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
