import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./Components/Navigation/nav";
import * as Routes from "./constants/routes";
import LandingPage from "./Components/Pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
      </div>
      <Route exact path={Routes.LANDING} component={LandingPage} />
    </Router>
  );
}

export default App;
