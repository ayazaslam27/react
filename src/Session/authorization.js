import React from "react";
import { withFirebase } from "../firebase/index";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { Redirect } from "react-router-dom";
import { AuthUserContext } from "./context";

const withAuthorization = () => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (!authUser) {
          this.props.match.push("/account");
        }
      });
    }
    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return compose(
    withRouter,
    withFirebase
  )(WithAuthorization);
};
export default withAuthorization;
