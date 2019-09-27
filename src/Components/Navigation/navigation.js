import React from "react";
import {
  SvgIcon,
  AppBar,
  MenuItem,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Select,
  IconButton,
  makeStyles
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { Route, Link } from "react-router-dom";
import * as Routes from "../../constants/routes";
import HomePage from "../Pages/HomePage";
import AuthenticationPage from "../Pages/AuthenticationPage";
import DashboardPage from "../Pages/DashboardPage";
import AuthorisationPage from "../Pages/AuthorisationPage";
import MiddlewarePage from "../Pages/MiddlewarePage";
import { connect } from "react-redux";
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
  copyright:{
     marginLeft: theme.spacing(0.5),
  },
  copyrightText:{
     marginLeft: theme.spacing(0.5),
      marginTop: theme.spacing(0.2)
  },
  title: {
    flexGrow: 1
  },
  language: {
    color: "white"
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
           <SvgIcon className={classes.copyright}>
              <path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </SvgIcon>
            <Typography className={classes.copyrightText}>
            Ayaz Aslam      
          </Typography>
          {!mobileOpen ? (authUser ? NavigationAuth : NavigationNonAuth) : null}
          {!mobileOpen ? (
            <Select
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={lang}
              onChange={handleChange}
              className={classes.language}
            >
              <MenuItem value={"en"}>en</MenuItem>
              <MenuItem value={"de"}>de</MenuItem>
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
