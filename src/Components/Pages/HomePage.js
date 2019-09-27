import React from "react";
import { connect } from "react-redux";
import { setActivePage } from "../../redux/actions";
import { withTranslation } from "react-i18next";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.onSetActivePage(1);
  }

  render() {
    const { t } = this.props;
    return (
      <Grid>
        <h1>{t("home.title")}</h1>
        <h2>{t("home.description-main")}</h2>
        <Container>
          <h3> {t("home.text1")}</h3>

          <List>
            <ListItem>
              <ListItemText primary="React framework"></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Redux for state management"></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Firebase for backend"></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="React i18n for Localization"></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Material UI for styling"></ListItemText>
            </ListItem>
          </List>

          <h3> {t("home.text2")}</h3>
          <Typography variant="h5">
            <Link href={"https://github.com/ayazaslam27/react"}>Github</Link>
          </Typography>
        </Container>
      </Grid>
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
