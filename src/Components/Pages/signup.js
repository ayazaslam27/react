import React from "react";
import { withFirebase } from "../../firebase/index";
import Modal from "../Modal/modal";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = { ...INITIAL_STATE };
  }

  handleClose(e) {
    this.props.onChange(false);
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    //if username starts with alphabet A, Admin role is automatically assigned else Observer
    let role = this.getRole(username);

    this.props.firebase
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          role
        });
        authUser.user.updateProfile({
          displayName: username
        });
        alert("Signup successfull");
        this.handleClose();
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  getRole = username => {
    if (username.startsWith("A") || username.startsWith("a")) {
      return "Admin";
    } else {
      return "Observer";
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <Modal open={this.props.showModal} handleClose={this.handleClose}>
        <h2>Sign up</h2>
        <form onSubmit={this.onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={username}
            onChange={this.onChange}
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={this.onChange}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={passwordOne}
            onChange={this.onChange}
            name="passwordOne"
            label="Password"
            type="password"
            id="passwordOne"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={passwordTwo}
            onChange={this.onChange}
            name="passwordTwo"
            label="Repeat password"
            type="password"
            id="passwordTwo"
            autoComplete="current-password"
          />
          <Button
            variant="contained"
            color="primary"
            disabled={isInvalid}
            type="submit"
          >
            Sign up
          </Button>
          {error && <p>{error.message}</p>}
        </form>
      </Modal>
    );
  }
}

SignUpComponent.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withFirebase(SignUpComponent);
