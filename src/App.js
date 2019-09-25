import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Components/Navigation/nav";
import withAuthentication from "./Session/authentication";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
      </div>
    </Router>
  );
}

export default withAuthentication(App);
