import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setActivePage } from "../../redux/actions";
import counter from "./Counter";

class CounterPage extends React.Component {
  componentDidMount() {
    this.props.onSetActivePage(4);
  }

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

function mapDispatchToProps(dispatch) {
  return {
    onSetActivePage: activePage => dispatch(setActivePage(activePage))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CounterPage);
