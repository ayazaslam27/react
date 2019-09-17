import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Route, Link } from "react-router-dom";
import * as Routes from "../../constants/routes";
import { HomeComponent } from "../Pages/Home";
import AccountPage from "../Pages/AccountPage";
import { AdminComponent } from "../Pages/Admin";
import { ContactComponent } from "../Pages/Contact";
import { CounterPage } from "../Pages/CounterParent";

function NavigationComponent({ isUserAuthorized }) {
  const [value, setValue] = React.useState(1);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <AppBar color="primary" position="static">
        <Tabs centered value={value} onChange={handleChange}>
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
            label="Admin"
            to={Routes.ADMIN}
            value={3}
            component={Link}
            index={3}
          ></Tab>
          <Tab
            index={4}
            label="Contact"
            to={Routes.CONTACT}
            value={4}
            component={Link}
          ></Tab>
          <Tab
            index={5}
            label="Counter"
            to={Routes.COUNTER}
            value={5}
            component={Link}
          ></Tab>
        </Tabs>
      </AppBar>
      <Route exact path={Routes.HOME} component={HomeComponent} />
      <Route path={Routes.ACCOUNT} component={AccountPage} />
      <Route path={Routes.ADMIN} component={AdminComponent} />
      <Route path={Routes.CONTACT} component={ContactComponent} />
      <Route path={Routes.COUNTER} component={CounterPage} />
    </div>
  );
}

export default NavigationComponent;
