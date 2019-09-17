import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import MaterialLink from "@material-ui/core/Link";
import { SignInComponent } from "./SignIn";
import signupComponent from "./SignUp";

class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSignInModal: false };
    this.showSignInForm = this.showSignInForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showSignInForm() {
    this.setState({ showSignInModal: true });
  }

  handleChange(showModal) {
    this.setState({ showSignInModal: showModal });
  }

  render() {
    let task;
    if (!this.props.isUserLoggedIn) {
      task = (
        <div>
          You are not logged in. Please{" "}
          <MaterialLink onClick={this.showSignInForm}>sign in </MaterialLink>
          still don't have an account{" "}
          <Link to={`${this.props.match.url}/sign-up`}>sign up</Link> with us
          <Route
            path={`${this.props.match.path}/sign-up/`}
            component={signupComponent}
          />
          <SignInComponent
            showModal={this.state.showSignInModal}
            onChange={this.handleChange}
          ></SignInComponent>
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
