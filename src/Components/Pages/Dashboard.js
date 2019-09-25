import React from "react";
import withAuthorization from "../../Session/authorization";
import MaterialLink from "@material-ui/core/Link";
import { store } from "../../redux/store";
import { connect } from "react-redux";
import { setAuthorization } from "../../redux/actions";

class DashboardComponent extends React.Component {
  handleSignOut = event => {
    this.props.firebase
      .signOut()
      .then(authUser => {
        this.props.onSetAuthorization(authUser);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <div>
          You are on Dashboard page. This page will explain the concept of
          protected routing. Displays only if the user is authorized
        </div>
        <MaterialLink onClick={this.handleSignOut}>sign out </MaterialLink>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSetAuthorization: authUser => dispatch(setAuthorization(authUser))
  };
}

export default withAuthorization(store.getState().auth.isUserLoggedIn)(
  connect(
    null,
    mapDispatchToProps
  )(DashboardComponent)
);
