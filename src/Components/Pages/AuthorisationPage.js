import React from "react";
import { connect } from "react-redux";
import { setActivePage } from "../../redux/actions";
import { withFirebase } from "../../firebase/index";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Grid } from "@material-ui/core";
import { withTranslation } from "react-i18next";

const INITIAL_STATE = {
  name: "",
  message: ""
};
const messages = [];

class AuthorisationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE, messages };
    this.getMessages = this.getMessages.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    this.props.onSetActivePage(3);
    let that = this;
    this.props.firebase.database
      .ref("messages")
      .on("child_added", function(snapshot) {
        var newPost = snapshot.val();
        var messages = that.state.messages;
        messages.push(newPost);
        that.setState({ messages: messages.reverse() });
      });

    this.getMessages();
  }

  componentWillUnmount() {
    this.props.firebase.database.ref("messages/").off("child_added");
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getMessages = () => {
    let messages = [];
    let that = this;
    this.props.firebase
      .getLatest10Messages()
      .then(snapshot => {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          messages.push({
            name: childData.name,
            message: childData.message
          });
        });
        that.setState({ messages: messages.reverse() });
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  };

  addMessage = event => {
    this.props.firebase
      .addMessage({ name: this.state.name, message: this.state.message })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
    this.setState({ name: "", message: "" });
    event.preventDefault();
  };

  render() {
    const { name, message, error } = this.state;
    const { t } = this.props;
    const isInvalid = name === "" || message === "";
    return (
      <Grid>
        <h1>{t("Authorisation.title")}</h1>
        <p>{t("Authorisation.description")}</p>
        <Container maxWidth="sm">
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            required
            value={name}
            onChange={this.onChange}
            label={t("Authorisation.your-name")}
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            required
            value={message}
            onChange={this.onChange}
            label={t("Authorisation.your-message")}
            name="message"
            autoComplete="message"
            autoFocus
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={isInvalid}
            onClick={this.addMessage}
          >
            {t("Authorisation.send")}
          </Button>
          {error && <p>{error.message}</p>}
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t("Authorisation.name")}</TableCell>
                <TableCell align="left">{t("Authorisation.message")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.messages.map((message, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {message.name}
                  </TableCell>
                  <TableCell align="left">{message.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
)(withFirebase(withTranslation()(AuthorisationPage)));
