import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Route, Link } from "react-router-dom";
import * as Routes from "../../constants/routes";
import HomeComponent from "../Pages/Home";
import AccountPage from "../Pages/AccountPage";
import DashboardComponent from "../Pages/Dashboard";
import ContactComponent from "../Pages/Contact";
import CounterPage from "../Pages/CounterParent";
import { connect } from "react-redux";

function NavigationComponent({ authUser, activePage }) {
  const NavigationAuth = (
    <Tabs centered value={activePage}>
      <Tab
        label="Home"
        to={Routes.HOME}
        value={1}
        component={Link}
        index={1}
      ></Tab>
      <Tab
        label="Account"
        to={Routes.ACCOUNT}
        value={2}
        component={Link}
        index={2}
      ></Tab>
      <Tab
        index={3}
        label="Contact"
        to={Routes.CONTACT}
        value={3}
        component={Link}
      ></Tab>
      <Tab
        index={4}
        label="Counter"
        to={Routes.COUNTER}
        value={4}
        component={Link}
      ></Tab>
      <Tab
        label="Dashboard"
        to={Routes.DASHBOARD}
        value={5}
        component={Link}
        index={5}
      ></Tab>
    </Tabs>
  );

  const NavigationNonAuth = (
    <Tabs centered value={activePage}>
      <Tab
        label="Home"
        to={Routes.HOME}
        value={1}
        component={Link}
        index={1}
      ></Tab>
      <Tab
        label="Account"
        to={Routes.ACCOUNT}
        value={2}
        component={Link}
        index={2}
      ></Tab>
      <Tab
        index={3}
        label="Contact"
        to={Routes.CONTACT}
        value={3}
        component={Link}
      ></Tab>
      <Tab
        index={4}
        label="Counter"
        to={Routes.COUNTER}
        value={4}
        component={Link}
      ></Tab>
    </Tabs>
  );

  return (
    <div>
      <AppBar color="primary" position="static">
        {authUser ? NavigationAuth : NavigationNonAuth}
      </AppBar>
      <Route exact path={Routes.HOME} component={HomeComponent} />
      <Route path={Routes.ACCOUNT} component={AccountPage} />
      <Route path={Routes.DASHBOARD} component={DashboardComponent} />
      <Route path={Routes.CONTACT} component={ContactComponent} />
      <Route path={Routes.COUNTER} component={CounterPage} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    authUser: state.auth.authUser,
    activePage: state.app.activePage
  };
}
export default connect(mapStateToProps)(NavigationComponent);
