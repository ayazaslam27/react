import React from "react";
import { connect } from "react-redux";
import MaterialLink from "@material-ui/core/Link";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import { setActivePage } from "../../redux/actions";
import { withTranslation } from "react-i18next";

class AuthenticationPage extends React.Component {
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

  componentDidMount() {
    this.props.onSetActivePage(2);
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
    const { t } = this.props;
    let task;
    if (!this.props.authUser) {
      task = (
        <div>
          <h1> {t("Authentication.description")} </h1>
          {t("Authentication.text1")}{" "}
          <MaterialLink onClick={this.handleSignInModal}>sign in </MaterialLink>
          {t("Authentication.text2")}{" "}
          <MaterialLink onClick={this.handleSignupModal}>sign up </MaterialLink>{" "}
          {t("Authentication.text3")}
          <SignInModal
            showModal={this.state.showSignInModal}
            onChange={this.handleSignInModalChange}
          ></SignInModal>
          <SignUpModal
            showModal={this.state.showSignupModal}
            onChange={this.handleSignUpModalChange}
          ></SignUpModal>
        </div>
      );
    } else {
      task = (
        <h3>
          {t("Welcome")} {this.props.authUser.displayName}
        </h3>
      );
    }

    return task;
  }
}

function mapStateToProps(state) {
  return {
    authUser: state.auth.authUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSetActivePage: activePage => dispatch(setActivePage(activePage))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(AuthenticationPage));
