import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setActivePage } from "../../redux/actions";
import MiddlewarePageChild from "./MiddlewarePageChild";
import { withTranslation } from "react-i18next";

class MiddlewarePage extends React.Component {
  componentDidMount() {
    this.props.onSetActivePage(4);
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <h1>{t("Middleware.title")}</h1>
        <p>{t("Middleware.description")}</p>
        <p>{t("Middleware.child-route")}</p>
        <Link to={`${this.props.match.url}/nested-route`}>Child-route</Link>
        <Route
          path={`${this.props.match.path}/:passingProps/`}
          component={MiddlewarePageChild}
        />
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
)(withTranslation()(MiddlewarePage));
