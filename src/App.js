import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomeComponent } from "./Components/Home";
import { CounterPage } from "./Components/CounterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counterPage">Counter</Link>
        </nav>

        <Route path="/" exact component={HomeComponent} />
        <Route path="/counterPage" component={CounterPage} />
      </Router>
    </div>
  );
}

export default App;
