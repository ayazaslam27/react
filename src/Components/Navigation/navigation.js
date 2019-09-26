import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Route, Link } from "react-router-dom";
import * as Routes from "../../constants/routes";
import HomePage from "../Pages/HomePage";
import AuthenticationPage from "../Pages/AuthenticationPage";
import DashboardPage from "../Pages/DashboardPage";
import AuthorisationPage from "../Pages/AuthorisationPage";
import MiddlewarePage from "../Pages/MiddlewarePage";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { withTranslation } from "react-i18next";

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

function NavigationBar({ activePage, authUser, t }) {
  const classes = useStyles();

  const NavigationAuth = (
    <Tabs centered value={activePage} className={classes.title}>
      <Tab
        label={t("home.title")}
        to={Routes.HOME}
        value={1}
        component={Link}
        index={1}
      ></Tab>
      <Tab
        label={t("Authentication.title")}
        to={Routes.AUTHENTICATION}
        value={2}
        component={Link}
        index={2}
      ></Tab>
      <Tab
        index={3}
        label={t("Authorisation.title")}
        to={Routes.AUTHORISATION}
        value={3}
        component={Link}
      ></Tab>
      <Tab
        index={4}
        label={t("Middleware.title")}
        to={Routes.MIDDLEWARE}
        value={4}
        component={Link}
      ></Tab>
      <Tab
        label={t("Dashboard.title")}
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
        label={t("home.title")}
        to={Routes.HOME}
        value={1}
        component={Link}
        index={1}
      ></Tab>
      <Tab
        label={t("Authentication.title")}
        to={Routes.AUTHENTICATION}
        value={2}
        component={Link}
        index={2}
      ></Tab>
      <Tab
        index={3}
        label={t("Authorisation.title")}
        to={Routes.AUTHORISATION}
        value={3}
        component={Link}
      ></Tab>
      <Tab
        index={4}
        label={t("Middleware.title")}
        to={Routes.MIDDLEWARE}
        value={4}
        component={Link}
      ></Tab>
    </Tabs>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">App</Typography>
          {authUser ? NavigationAuth : NavigationNonAuth}
        </Toolbar>
      </AppBar>
      <Route exact path={Routes.HOME} component={HomePage} />
      <Route path={Routes.AUTHENTICATION} component={AuthenticationPage} />
      <Route path={Routes.DASHBOARD} component={DashboardPage} />
      <Route path={Routes.AUTHORISATION} component={AuthorisationPage} />
      <Route path={Routes.MIDDLEWARE} component={MiddlewarePage} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    authUser: state.auth.authUser,
    activePage: state.app.activePage
  };
}
export default connect(mapStateToProps)(withTranslation()(NavigationBar));
