import React from "react";

export class AdminComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Admin</h1>
        <p>
          You are on Admin page. This page will explain the concept of protected
          routing. Displays only if the user is protected
        </p>
      </div>
    );
  }
}
