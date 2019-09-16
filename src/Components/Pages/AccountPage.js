import React from "react";
import { Route, Link } from "react-router-dom";
import counter from "./Counter";

export class AccountPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Account Management</h1>
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
