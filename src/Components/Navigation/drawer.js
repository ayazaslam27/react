import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import * as Routes from "../../constants/routes";
import HomePage from "../Pages/HomePage";
import AuthenticationPage from "../Pages/AuthenticationPage";
import DashboardPage from "../Pages/DashboardPage";
import AuthorisationPage from "../Pages/AuthorisationPage";
import MiddlewarePage from "../Pages/MiddlewarePage";
import { setDrawerOpen } from "../../redux/actions";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  linkstyle: {
    textDecoration: "none",
    color: "Black",
    textAlign: "center",
    display: "inline - block"
  }
}));

function NavigationDrawer(props) {
  const classes = useStyles();
  const NavigationAuth = (
    <List>
      <ListItem button>
        <ListItemText>
          <Link
            component={HomePage}
            to={Routes.HOME}
            className={classes.linkstyle}
          >
            {props.t("home.title")}
          </Link>
        </ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>
          <Link
            component={AuthenticationPage}
            to={Routes.AUTHENTICATION}
            className={classes.linkstyle}
          >
            {props.t("Authentication.title")}
          </Link>
        </ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>
          <Link
            component={AuthorisationPage}
            to={Routes.AUTHORISATION}
            className={classes.linkstyle}
          >
            {props.t("Authorisation.title")}
          </Link>
        </ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>
          <Link
            component={MiddlewarePage}
            to={Routes.MIDDLEWARE}
            className={classes.linkstyle}
          >
            {props.t("Middleware.title")}
          </Link>
        </ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>
          <Link
            component={DashboardPage}
            to={Routes.DASHBOARD}
            className={classes.linkstyle}
          >
            {props.t("Dashboard.title")}
          </Link>
        </ListItemText>
      </ListItem>
    </List>
  );

  const NavigationNonAuth = (
    <List>
      <ListItem button>
        <ListItemText>
          <Link
            component={HomePage}
            to={Routes.HOME}
            className={classes.linkstyle}
          >
            {props.t("home.title")}
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          <Link
            component={AuthenticationPage}
            to={Routes.AUTHENTICATION}
            className={classes.linkstyle}
          >
            {props.t("Authentication.title")}
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          <Link
            component={AuthorisationPage}
            to={Routes.AUTHORISATION}
            className={classes.linkstyle}
          >
            {props.t("Authorisation.title")}
          </Link>
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          <Link
            component={MiddlewarePage}
            to={Routes.MIDDLEWARE}
            className={classes.linkstyle}
          >
            {props.t("Middleware.title")}
          </Link>
        </ListItemText>
      </ListItem>
    </List>
  );

  return (
    <Drawer
      className={classes.drawer}
      open={props.drawerOpen}
      onClose={props.onDrawClose}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={props.onDrawClose}
        onKeyDown={props.onDrawClose}
      >
        {props.mobileOpen
          ? props.authUser
            ? NavigationAuth
            : NavigationNonAuth
          : null}
      </div>
    </Drawer>
  );
}

function mapStateToProps(state) {
  return {
    authUser: state.auth.authUser,
    mobileOpen: state.app.mobileOpen,
    drawerOpen: state.app.drawerOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDrawClose: () => dispatch(setDrawerOpen(false))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(NavigationDrawer));
