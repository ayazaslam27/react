import React from "react";
import MaterialLink from "@material-ui/core/Link";
import { connect } from "react-redux";
import { setAuthorization } from "../../redux/actions";

function mapDispatchToProps(dispatch) {
  return {
    setAuthorization: payload => dispatch(setAuthorization(payload))
  };
}

function mapStateToProps(state) {
  return {
    isUserAuthorized: state.auth.isUserAuthorized
  };
}

class LandingComponent extends React.Component {
  render() {
    let message;

    if (this.props.isUserAuthorized) {
      message = <p>You have access to the website.</p>;
    } else {
      message = (
        <p>
          You must
          <MaterialLink
            onClick={() => {
              this.props.setAuthorization({ isUserAuthorized: true });
            }}
          >
            click here
          </MaterialLink>
          for access.
        </p>
      );
    }

    return (
      <div>
        <h1>Main Page</h1>
        <p>You are on main page.</p>
        {message}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingComponent);
