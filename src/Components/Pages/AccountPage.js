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

    this.showSignInModal = this.showSignInModal.bind(this);
    this.showSignUpModal = this.showSignUpModal.bind(this);
    this.handleSignInModalChange = this.handleSignInModalChange.bind(this);
    this.handleSignUpModalChange = this.handleSignUpModalChange.bind(this);
  }

  showSignInModal() {
    this.setState({ showSignInModal: true, showSignupModal: false });
  }

  showSignUpModal() {
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
          <MaterialLink onClick={this.showSignInModal}>sign in </MaterialLink>
          or if you still don't have an account{" "}
          <MaterialLink onClick={this.showSignUpModal}>
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
