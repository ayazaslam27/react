import React from "react";
import withAuthorization from "../../Session/authorization";
import { store } from "../../redux/store";

class DashboardComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>
          You are on Dashboard page. This page will explain the concept of
          protected routing. Displays only if the user is authorized
        </p>
      </div>
    );
  }
}

export default withAuthorization(store.getState().auth.isUserLoggedIn)(
  DashboardComponent
);
