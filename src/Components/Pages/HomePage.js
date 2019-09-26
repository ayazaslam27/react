import React from "react";
import { connect } from "react-redux";
import { setActivePage } from "../../redux/actions";
import { withTranslation } from "react-i18next";
import Container from "@material-ui/core/Container";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.onSetActivePage(1);
  }

  render() {
    const { t } = this.props;
    return (
      <Container maxWidth="sm">
        <h1>{t("home.title")}</h1>
        <h2>{t("home.description-main")}</h2>
        <div>
          <h3> {t("home.text1")}</h3>
          <ul>
            <li>React framework</li>
            <li>Redux for state management</li>
            <li>Firebase for backend </li>
            <li>React i18n for Localization.</li>
            <li>Material UI for styling.</li>
          </ul>
          <h3> {t("home.text2")}</h3>
        </div>
      </Container>
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
)(withTranslation()(HomePage));
