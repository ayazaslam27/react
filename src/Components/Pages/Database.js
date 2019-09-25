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

const INITIAL_STATE = {
  name: "",
  message: ""
};

class DatabaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    this.props.onSetActivePage(3);
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addMessage = event => {
    this.props.firebase
      .addMessage({ name: this.state.name, message: this.state.message })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  };

  render() {
    const { name, message, error } = this.state;

    const isInvalid = name === "" || message === "";
    const rows = [];
    return (
      <div>
        <h1>Database</h1>
        <Container maxWidth="sm">
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            required
            value={name}
            onChange={this.onChange}
            label="Your name"
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
            label="Your message"
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
            Send
          </Button>
          {error && <p>{error.message}</p>}

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
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
)(withFirebase(DatabaseComponent));
