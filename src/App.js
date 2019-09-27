import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./Components/Navigation/navigation";
import Drawer from "./Components/Navigation/drawer";
import withAuthentication from "./Session/authentication";
import { setMobileOpen, setDrawerOpen } from "./redux/actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (window.innerWidth <= 760 && !this.props.mobileOpen) {
      this.props.onSetMobileOpen(true);
      this.props.onSetDrawerOpen(false);
    } else {
      this.props.onSetMobileOpen(false);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar></NavigationBar>
          <Drawer></Drawer>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    mobileOpen: state.app.mobileOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSetMobileOpen: mobileOpen => dispatch(setMobileOpen(mobileOpen)),
    onSetDrawerOpen: drawerOpen => dispatch(setDrawerOpen(drawerOpen))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthentication(App));
