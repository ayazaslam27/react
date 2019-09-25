import React from "react";
import { connect } from "react-redux";
import { setActivePage } from "../../redux/actions";

class HomeComponent extends React.Component {
  componentDidMount() {
    this.props.onSetActivePage(1);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>You are on home page.</p>
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
)(HomeComponent);
