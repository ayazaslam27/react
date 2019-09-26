import React from "react";
import withAuthorization from "../../Session/authorization";
import MaterialLink from "@material-ui/core/Link";
import { store } from "../../redux/store";
import { connect } from "react-redux";
import { setAuthorization, setActivePage } from "../../redux/actions";
import { withTranslation } from "react-i18next";

class DashboardPage extends React.Component {
  componentDidMount() {
    this.props.onSetActivePage(5);
  }

  handleSignOut = event => {
    this.props.onSetActivePage(2);
    this.props.firebase
      .signOut()
      .then(authUser => {
        this.props.onSetAuthorization(authUser);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <h1>{t("Dashboard.title")}</h1>
        <div>{t("Dashboard.description")}</div>
        <MaterialLink onClick={this.handleSignOut}>sign out </MaterialLink>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSetAuthorization: authUser => dispatch(setAuthorization(authUser)),
    onSetActivePage: activePage => dispatch(setActivePage(activePage))
  };
}

export default withAuthorization(store.getState().auth.isUserLoggedIn)(
  connect(
    null,
    mapDispatchToProps
  )(withTranslation()(DashboardPage))
);
