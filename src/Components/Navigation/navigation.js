import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Route, Link } from "react-router-dom";
import * as Routes from "../../constants/routes";
import HomeComponent from "../Pages/Home";
import AccountPage from "../Pages/AccountPage";
import DashboardComponent from "../Pages/Dashboard";
import DatabaseComponent from "../Pages/Database";
import CounterPage from "../Pages/CounterParent";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function NavigationBar({ activePage, authUser }) {
  const classes = useStyles();

  const NavigationAuth = (
    <Tabs centered value={activePage} className={classes.title}>
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
        label="Database"
        to={Routes.DATABASE}
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
    <Tabs centered value={activePage} className={classes.title}>
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
        label="Database"
        to={Routes.DATABASE}
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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">React Demo App</Typography>
          {authUser ? NavigationAuth : NavigationNonAuth}
        </Toolbar>
      </AppBar>
      <Route exact path={Routes.HOME} component={HomeComponent} />
      <Route path={Routes.ACCOUNT} component={AccountPage} />
      <Route path={Routes.DASHBOARD} component={DashboardComponent} />
      <Route path={Routes.DATABASE} component={DatabaseComponent} />
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
export default connect(mapStateToProps)(NavigationBar);
