import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Route, Link } from "react-router-dom";
import * as Routes from "../../constants/routes";
import HomePage from "../Pages/HomePage";
import AuthenticationPage from "../Pages/AuthenticationPage";
import DashboardPage from "../Pages/DashboardPage";
import AuthorisationPage from "../Pages/AuthorisationPage";
import MiddlewarePage from "../Pages/MiddlewarePage";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { withTranslation } from "react-i18next";
import { setMobileOpen, setDrawerOpen } from "../../redux/actions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  mainText: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.2)
  },
  title: {
    flexGrow: 1
  }
}));

function NavigationBar({
  activePage,
  authUser,
  t,
  i18n,
  mobileOpen,
  drawerOpen,
  onSetDrawerOpen
}) {
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

  const [open, setOpen] = React.useState(false);

  const [lang, setLanguage] = React.useState("en");

  const handleChange = event => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDrawerOpen = () => {
    onSetDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {mobileOpen ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          ) : null}

          <Typography className={classes.mainText}>
            React-Firebase-App
          </Typography>
          {!mobileOpen ? (authUser ? NavigationAuth : NavigationNonAuth) : null}
          {!mobileOpen ? (
            <Select
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={lang}
              onChange={handleChange}
            >
              <MenuItem value={"en"}>English</MenuItem>
              <MenuItem value={"de"}>German</MenuItem>
            </Select>
          ) : null}
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
    activePage: state.app.activePage,
    mobileOpen: state.app.mobileOpen,
    drawerOpen: state.app.drawerOpen
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
)(withTranslation()(NavigationBar));
