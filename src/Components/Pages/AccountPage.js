import React from "react";
import { connect } from "react-redux";
import MaterialLink from "@material-ui/core/Link";
import { SignInComponent } from "./SignIn";
import { SignUpComponent } from "./SignUp";

class AccountPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignInModal: false,
      showSignupModal: false
    };

    this.handleSignInModal = this.handleSignInModal.bind(this);
    this.handleSignupModal = this.handleSignupModal.bind(this);
    this.handleSignInModalChange = this.handleSignInModalChange.bind(this);
    this.handleSignUpModalChange = this.handleSignUpModalChange.bind(this);
  }

  handleSignInModal() {
    this.setState({ showSignInModal: true, showSignupModal: false });
  }

  handleSignupModal() {
    this.setState({ showSignInModal: false, showSignupModal: true });
  }

  handleSignInModalChange(showModal) {
    this.setState({ showSignInModal: showModal });
  }

  handleSignUpModalChange(showModal) {
    this.setState({ showSignupModal: showModal });
  }

  render() {
    let task;
    if (!this.props.isUserLoggedIn) {
      task = (
        <div>
          You are not logged in. Please{" "}
          <MaterialLink onClick={this.handleSignInModal}>sign in </MaterialLink>
          or if you still don't have an account{" "}
          <MaterialLink onClick={this.handleSignupModal}>
            sign up{" "}
          </MaterialLink>{" "}
          with us
          <SignInComponent
            showModal={this.state.showSignInModal}
            onChange={this.handleSignInModalChange}
          ></SignInComponent>
          <SignUpComponent
            showModal={this.state.showSignupModal}
            onChange={this.handleSignUpModalChange}
          ></SignUpComponent>
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
