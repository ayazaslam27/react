import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withFirebase } from "../firebase/index";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.props.onSetAuthUser(JSON.parse(localStorage.getItem("authUser")));
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.props.onSetAuthUser(authUser);
        },
        () => {
          localStorage.removeItem("authUser");
          this.props.onSetAuthUser(undefined);
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }
    render() {
      return <Component {...this.props} />;
    }
  }
  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch({ type: "AUTH_USER_SET", authUser })
  });

  return compose(
    withFirebase,
    connect(
      null,
      mapDispatchToProps
    )
  )(WithAuthentication);
};
export default withAuthentication;
