import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import counter from "./Counter";

export class CounterPage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>You are on counter page.</p>
        <Link to={`${this.props.match.url}/counter from -5 to 5`}>Counter</Link>
        <Route
          path={`${this.props.match.path}/:passingProps/`}
          component={counter}
        />
      </div>
    );
  }
}
