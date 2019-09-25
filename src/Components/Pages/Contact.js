import React from "react";
import { connect } from "react-redux";
import { setActivePage } from "../../redux/actions";

class ContactComponent extends React.Component {
  componentDidMount() {
    this.props.onSetActivePage(3);
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>You are on Contact page.</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSetActivePage: activePage => dispatch(setActivePage(activePage))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ContactComponent);
