import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./Components/Navigation/navigation";
import withAuthentication from "./Session/authentication";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar></NavigationBar>
      </div>
    </Router>
  );
}

export default withAuthentication(App);
