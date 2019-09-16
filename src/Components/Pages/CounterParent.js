import React from "react";
import { Route, Link } from "react-router-dom";
import counter from "./CounterChild";

export class CounterPage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>You are on counter page.</p>
        <Link
          to={`${this.props.match.url}/A Counter that counts from -5  to 5 using redux concepts (middleware) and nested routes`}
        >
          Counter
        </Link>
        <Route
          path={`${this.props.match.path}/:passingProps/`}
          component={counter}
        />
      </div>
    );
  }
}
