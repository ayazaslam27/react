import React from "react";
import { withFirebase } from "../firebase/index";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";

const withAuthorization = () => Component => {
  class WithAuthorization extends React.Component {
    // componentDidMount() {
    //   if (!this.props.authUser) {
    //     this.props.match.push("/account");
    //   }
    // }

    render() {
      return this.props.authUser ? (
        <Component {...this.props} />
      ) : (
        <Redirect to="/account"></Redirect>
      );
    }
  }
  const mapStateToProps = state => ({
    authUser: state.auth.authUser
  });

  return compose(
    withRouter,
    withFirebase,
    connect(mapStateToProps)
  )(WithAuthorization);
};

export default withAuthorization;
