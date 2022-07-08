import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";


const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {code ? <Dashboard code={code} /> : <LandingPage />}
      </BrowserRouter>
    </div>
  );
}

export default App;
