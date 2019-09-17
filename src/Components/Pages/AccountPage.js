import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import signinComponent from "./SignIn";
import signupComponent from "./SignUp";
import modal from "../Modal/modal";

class AccountPage extends React.Component {
  render() {
    let task;
    if (!this.props.isUserLoggedIn) {
      task = (
        <div>
          You are not logged in. Please{" "}
          <Link to={`${this.props.match.url}/sign-in`}>sign in</Link> or if you
          still don't have an account{" "}
          <Link to={`${this.props.match.url}/sign-up`}>sign up</Link> with us
          <Route
            path={`${this.props.match.path}/sign-up/`}
            component={signupComponent}
          />
          <Route
            path={`${this.props.match.path}/sign-in/`}
            component={signinComponent}
          />
        </div>
      );
    } else {
      task = <h3>Welcome</h3>;
    }

    return task;
  }
}

function mapStateToProps(state) {
  return {
    isUserLoggedIn: state.auth.isUserLoggedIn
  };
}

export default connect(mapStateToProps)(AccountPage);
